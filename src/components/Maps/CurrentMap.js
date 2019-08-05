import React, {useState, useEffect} from 'react';
import { makeStyles, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography } from '@material-ui/core';
// import { CommuteOutlined } from '@material-ui/icons'

import { ButtonStatus, MapContainer } from '../../components'
import { CurrentMap_style } from '../../style'

const CurrentMap = (props) => {

   const classes = CurrentMap_style()
   console.log(props)

   const [MapsOpen, setMapsOpen] = useState(false)
   

   useEffect(() => {
       if(props.handleClickOpen !== null){
        handleClickOpen()
       }
   }, [props])

   const handleClose = () => {
    setMapsOpen(false);
   }

   const handleClickOpen = () => {
    setMapsOpen(true);
   }

    return(
        <Dialog aria-labelledby="scroll-dialog-title" onClose={handleClose} open={MapsOpen} fullWidth={true} maxWidth={"md"} classes={{ paper: classes.dialogPaper }} scroll={"paper"}>
            <DialogTitle onClose={handleClose} id="scroll-dialog-title">
                <Typography className={classes.Texstyle}>ดูพิกัดรถ</Typography>
                <Grid item xs={12} justify="flex-end" container className={classes.YourCurrent}> 
                    <Grid item xs={3}>
                        <ButtonStatus messages="ตำเเหน่งของคุณ" Buttoncode={"Currentpoint"}/>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent className={classes.Dialogstyle} dividers>
                <Grid item xs={12} container className={classes.GoogleMapstyle}>
                    {/* <MapContainer /> */}
                    
                </Grid>
            </DialogContent>
            <DialogActions className={classes.DialogActions}>
                <Grid item xs={6} container justify="center">
                            <ButtonStatus messages="รถว่าง" Buttoncode={"Notuse"}/>
                </Grid>
                <Grid item xs={6} container justify="center">
                    <ButtonStatus messages="รถกำลังใช้งานอยู่" Buttoncode={"Use"}/>
                </Grid>
            </DialogActions>
      </Dialog>
    )
}


export default CurrentMap
