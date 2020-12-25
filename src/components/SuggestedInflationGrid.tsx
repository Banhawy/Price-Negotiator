import React from 'react'
import Grid from '@material-ui/core/Grid'
import SuggestedInflation from './SuggestedInflation'



export default function SuggestedInflationGrid() {
    return (
        <Grid container spacing={3} style={{justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
            <Grid item md={3} sm={3} xs={12}>
                <SuggestedInflation percentage={10}/>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
                <SuggestedInflation percentage={15}/>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
                <SuggestedInflation percentage={20}/>
            </Grid>
        </Grid>
    )
}