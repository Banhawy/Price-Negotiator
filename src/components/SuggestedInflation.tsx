import React, { useContext } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import PriceContext from '../PriceContext'

interface ISuggestedInflationProps {
    percentage: number
}

function calculateNewPrice(price: number, percentage: number) {
    return (price * ((100 + percentage) / 100)).toFixed(2)
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

    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={4}>
                <Typography variant="h6" align="right">
                <span className={classes.green}> +{percentage}%</span> = &nbsp;
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h6" align="left">{newPrice}</Typography>
            </Grid>
        </Grid>
    )
}