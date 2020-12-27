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