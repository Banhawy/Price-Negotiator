import React from 'react';

interface PriceDifferenceProps {
    desiredPrice: number;
    offeredPrice: number;
}

function calculateDifference(firstNumber: number, secondNumber: number) {
    const absNumberValue : (number: number) => number = (value) => Math.abs(value)
    const numberValue: number = absNumberValue(firstNumber - secondNumber);
    const percentageValue: number = absNumberValue(Number(((numberValue / secondNumber) * 100).toFixed(2)))
    const isPositive: boolean = firstNumber - secondNumber >= 0 ? true : false;

    return { percentageValue, numberValue, isPositive }
}

export default function PriceDifference(props: PriceDifferenceProps) {
    const { desiredPrice, offeredPrice } = props
    const { percentageValue, numberValue, isPositive } = calculateDifference(offeredPrice, desiredPrice)

    return (
        <div>
            The offered price is {percentageValue}% - {numberValue} <strong>{isPositive ? 'MORE ' : 'LESS '}</strong> than your desired price.
        </div>
    )
}