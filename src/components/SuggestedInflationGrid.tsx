import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import SuggestedInflation from './SuggestedInflation'
import PriceContext from '../PriceContext'
import { suggestedInflations } from "./utils"


export default function SuggestedInflationGrid() {
    const { desiredPrice, offeredPrice } = useContext(PriceContext)
    const suggestedPercentages = suggestedInflations(desiredPrice, offeredPrice)
    return (
        <Grid container spacing={3} style={{ justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            {
                suggestedPercentages.map((percentage, index) => (
                    <Grid key={index} item md={3} sm={3} xs={12}>
                        <SuggestedInflation percentage={percentage} />
                    </Grid>
                ))
            }
        </Grid>
    )
}