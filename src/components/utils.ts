interface DifferenceResults {
    /**
     * The difference as a percentage value
     */
    percentageValue: number,
    /**
     * The difference as an integer value
     */
    numberValue: number,
    /**
     * a flag to indicate if difference is positive or negative
     */
    isPositive: boolean
}

/**
 * A function that calculates the difference between two numbers ammd returns an object cont
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns {DifferenceResults} an object containing the difference in percentage, number, and a flag to indicate if difference
 * is positive or negative
 */
export function calculateDifference(firstNumber: number, secondNumber: number): DifferenceResults {
    const absNumberValue: (number: number) => number = (value) => Math.abs(value)
    const numberValue: number = absNumberValue(firstNumber - secondNumber);
    const percentageValue: number = absNumberValue(Number(((numberValue / secondNumber) * 100).toFixed(2)))
    const isPositive: boolean = firstNumber - secondNumber >= 0 ? true : false;

    return { percentageValue, numberValue, isPositive }
}

/**
 * A function that returns suggested inflation positive percentages based on current desired & offered prices
 * @param desiredPrice the desired price entered by the user
 * @param offeredPrice the offered price entered by the user
 * @param increments the incremental increase in suggested inflations value
 * @param count the number of suggested inflations to return
 */
export function suggestedInflations(desiredPrice: number, offeredPrice: number, increments = 5, count = 3) {
    const { percentageValue, isPositive } = calculateDifference(offeredPrice, desiredPrice)
    let minPerentageIncrease: number = 10; // This is the default if difference is positive
    let suggestionArray = new Array<number>(count)

    const isModFive = (num: number) => num % 5 === 0
    const roundToFive = (num: number) => num + (5 - (num % 5))

    if (!isPositive) {
        minPerentageIncrease = isModFive(percentageValue) ? percentageValue + 5 : roundToFive(percentageValue)
    }

    let counter = 1;
    for (let i = 0; i < suggestionArray.length; i++) {
        suggestionArray[i] = minPerentageIncrease + counter * increments
        counter++
    }

    return suggestionArray
}