import React from 'react'
import Grid from '@material-ui/core/Grid'
import SuggestedInflation from './SuggestedInflation'



export default function SuggestedInflationGrid() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <SuggestedInflation percentage={10}/>
            </Grid>
            <Grid item xs={3}>
                <SuggestedInflation percentage={15}/>
            </Grid>
            <Grid item xs={3}>
                <SuggestedInflation percentage={20}/>
            </Grid>
        </Grid>
    )
}