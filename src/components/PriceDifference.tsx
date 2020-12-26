import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import PriceContext from '../PriceContext';
import Typography from '@material-ui/core/Typography';

function calculateDifference(firstNumber: number, secondNumber: number) {
    const absNumberValue : (number: number) => number = (value) => Math.abs(value)
    const numberValue: number = absNumberValue(firstNumber - secondNumber);
    const percentageValue: number = absNumberValue(Number(((numberValue / secondNumber) * 100).toFixed(2)))
    const isPositive: boolean = firstNumber - secondNumber >= 0 ? true : false;

    return { percentageValue, numberValue, isPositive }
}

export default function PriceDifference() {
    const { desiredPrice, offeredPrice } = useContext(PriceContext);
    const { percentageValue, numberValue, isPositive } = calculateDifference(offeredPrice, desiredPrice)
    const textStyle: React.CSSProperties = { color: isPositive ? 'green' : 'red' } 
    return (
        <div>
            <Typography variant="body1">
                The offered price is&nbsp;
                <Box component="span" style={textStyle}>
                    {percentageValue}% - {numberValue} &nbsp;
                </Box>
                <strong>{isPositive ? 'MORE ' : 'LESS '}</strong> than your desired price.
            </Typography>
        </div>
    )
}