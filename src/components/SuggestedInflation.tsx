import React, { useContext } from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import PriceContext from '../PriceContext'
import FormattedNumber from './FormattedNumber'

interface ISuggestedInflationProps {
    percentage: number
}

function calculateNewPrice(price: number, percentage: number) {
    return Number((price * ((100 + percentage) / 100)).toFixed(2))
}

const useStyles = makeStyles({
    root: {
        justifyContent: 'center'
    },
    green: {
        color: 'green'
    }
})

export default function SuggestedInflation(props: ISuggestedInflationProps) {
    const { offeredPrice } = useContext(PriceContext)
    const { percentage } = props
    const classes = useStyles()
    const newPrice = calculateNewPrice(offeredPrice, percentage)

    const styleObject = {
        border: '1px solid', 
        height: '3rem', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    }

    return (
        <Paper style={styleObject}>
            <Typography variant="h6" align="center">
                <span className={classes.green}> +{percentage}%</span> = <FormattedNumber number={newPrice} />
            </Typography>
        </Paper>
    )
}