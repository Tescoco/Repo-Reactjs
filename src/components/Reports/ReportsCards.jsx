import React from 'react'
import Styles from "./Reports.module.css";
import { Grid,Card,CardContent,Typography } from "@material-ui/core";


function ReportsCards({index}) {
    const lists = [['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],
    ['Armed robbery in apapa axis,stay away'],
    ['Durua is being invaded currently stay away'],
    ['SARS just collected 200k from my hand,WATCH OUT'],
    ['Motor accident along lagos-Ibadan express'],
    ['SARS just enter my hostel in uniben stay off!!'],
    ['Cultist just invaded epe'],
    ['1 million boys are currently in Mushin DIVERT'],]
    return (
        <div className={Styles.container}>

        <Grid container spacing={3} justify="center">
        <Grid item component={Card} className={Styles.container1}>
            <CardContent >
                <Typography >
                   {lists[index]}
                </Typography>
          </CardContent>
          </Grid>
         </Grid>
       </div>
    )
}

export default ReportsCards
