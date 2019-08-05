import React, {useState, useRef } from 'react';
import { makeStyles, Paper, Button, Grid, Typography, Avatar } from '@material-ui/core';

import { CurrentMap } from '../../components'
import { AmbulanceTable_style } from '../../style'

const AmbulanceTable = () => {

    const classes = AmbulanceTable_style();
    // const ref = useRef();
    const ImageURL = "https://ae01.alicdn.com/kf/HTB1fowWhRmWBuNkSndVq6AsApXas/1-36-Scale-Police-Auto-Diecast-Metal-Vehicle-Ambulance-Model-Pull-Back-Hospital-Rescue-Car-with.jpg"
    const [Ambulancepoint, setAmbulancepoint] = useState(null)

    const createData = (imageURL, licenseplate) => {
        return { imageURL, licenseplate };
    }

    const LicensePlate = [
            createData(ImageURL, 'กบ 4242'),
            createData(ImageURL, 'ชม 4545'),
            createData(ImageURL, 'ลบ 4245'),
            createData(ImageURL, 'กข 4286'),
            createData(ImageURL, 'ขอ 1245'),
            createData(ImageURL, 'งน 4258'),
            createData(ImageURL, 'งง 5555'),
    ]

    return(
      <Grid className={classes.rootcontainer} container justify="center">
          {LicensePlate.map(({ imageURL, licenseplate}, index) => (
            <Paper key={index} className={classes.Papercontainer}>
            <Grid item xs={3} container justify="flex-start" alignItems="center" className={classes.Namecolumnstyle}>
                    <Avatar src={imageURL}></Avatar>
            </Grid>
            <Grid item xs={5} lg={5} container justify="flex-start" alignItems="center">
              <Typography className={classes.Textstyle}>{licenseplate}</Typography>
            </Grid>
            <Grid item xs={4} lg={3} container justify="center" alignItems="center">
               <Grid item xs={6} lg={6}>
                  <Button className={classes.checkRadiusBuuton} onClick={() => setAmbulancepoint(index)}>ดูพิกัด</Button>
               </Grid>
               <Grid item xs={6} lg={6}>
                  <Button className={classes.successAmbulanceButton}>เสร็จสิ้น</Button>
               </Grid>
            </Grid>
            </Paper>
          ))}
        <CurrentMap handleClickOpen={Ambulancepoint}/>
      </Grid>
    )
}


export default AmbulanceTable

