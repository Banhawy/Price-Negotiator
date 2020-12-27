import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import PriceContext from '../PriceContext';
import Typography from '@material-ui/core/Typography';
import FormattedNumber from './FormattedNumber';
import { calculateDifference } from './utils'

export default function PriceDifference() {
    const { desiredPrice, offeredPrice } = useContext(PriceContext);
    const { percentageValue, numberValue, isPositive } = calculateDifference(offeredPrice, desiredPrice)
    const textStyle: React.CSSProperties = { color: isPositive ? 'green' : 'red' } 
    return (
        <div>
            <Typography variant="body1">
                The offered price is&nbsp;
                <Box component="span" style={textStyle}>
                    <FormattedNumber number={percentageValue}/>% - <FormattedNumber number={numberValue}/> &nbsp;
                </Box>
                <strong>{isPositive ? 'MORE ' : 'LESS '}</strong> than your desired price.
            </Typography>
        </div>
    )
}