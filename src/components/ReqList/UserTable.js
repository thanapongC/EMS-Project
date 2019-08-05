import React, { useState } from 'react';
import { makeStyles, Paper, Button, Grid, Typography } from '@material-ui/core';

import { CurrentMap, SendAmbulance } from '../../components'
import { UserTable_style } from '../../style'

const UserTable = () => {

    const classes = UserTable_style();
    const [Ambulancepoint, setAmbulancepoint] = useState(null)
    const [AmbulanceList, setAmbulanceList] = useState(null)

    const createData = (title, name, surname, status) => {
        return { title, name, surname, status };
    }

    const userGuest = [
            createData('นาย', 'สมศักดิ์', 'มั่งมี', 'ร้องขอรถพยาบาล'),
            createData('นาย', 'มั่งมี', 'ศรีสุข', 'ร้องขอรถพยาบาล'),
            createData('นาย', 'จินดามณี', 'เปล่งเเสง', 'ร้องขอรถพยาบาล'),
            createData('นาย', 'ขนเพรช', 'ขนเจ็ดสี', 'ร้องขอรถพยาบาล'),
            createData('นาย', 'Icute', 'thinkbeyond', 'ร้องขอรถพยาบาล'),
            createData('นาย', 'Icute', 'thinkbeyond', 'ร้องขอรถพยาบาล'),
            createData('นาย', 'Icute', 'thinkbeyond', 'ร้องขอรถพยาบาล'),
    ]

    return(
      <Grid className={classes.rootcontainer} container justify="center">
          {userGuest.map(({ title, name, surname, status}, index) => (
            <Paper key={index} className={classes.Papercontainer}>
            <Grid item xs={4} container justify="flex-start" alignItems="center" className={classes.Namecolumnstyle}>
              <Typography className={classes.Textstyle}> {title} { name } { surname } </Typography>
            </Grid>
            <Grid item xs={5} container justify="center" alignItems="center">
              <Typography className={classes.Textstyle}>{status}</Typography>
            </Grid>
            <Grid item xs={4} lg={3} container justify="center" alignItems="center">
               <Grid item xs={6}>
                  <Button className={classes.checkRadiusBuuton} onClick={() => setAmbulancepoint(index)}>ดูพิกัด</Button>
               </Grid>
               <Grid item xs={6}>
                  <Button className={classes.callAmbulanceButton} onClick={() => setAmbulanceList(index)}>จัดส่งรถ</Button>
               </Grid>
            </Grid>
            </Paper>
          ))}
          <CurrentMap handleClickOpen={Ambulancepoint}/>
          <SendAmbulance handleClickOpen={AmbulanceList}/>
      </Grid>
    )
}


export default UserTable
