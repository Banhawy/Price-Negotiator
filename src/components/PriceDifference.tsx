import React from 'react';

interface PriceDifferenceProps {
    desiredPrice: number;
    offeredPrice: number;
}

function calculateDifference(firstNumber: number, secondNumber: number) {
    const numberValue: number = firstNumber - secondNumber;
    const absNumberValue : number = Math.abs(numberValue)
    const percentageValue: number = Number(((numberValue / secondNumber) * 100).toFixed(2))
    const isPositive: boolean = numberValue >= 0 ? true : false;

    return { percentageValue, absNumberValue, isPositive }
}

export default function PriceDifference(props: PriceDifferenceProps) {
    const { desiredPrice, offeredPrice } = props
    const { percentageValue, absNumberValue, isPositive } = calculateDifference(offeredPrice, desiredPrice)

    return (
        <div>
            The offered price is {percentageValue}% - {absNumberValue} <strong>{isPositive ? 'MORE ' : 'LESS '}</strong> than your desired price.
        </div>
    )
}