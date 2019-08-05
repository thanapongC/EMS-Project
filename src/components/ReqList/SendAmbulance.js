import React, {useState, useEffect} from 'react';
import { makeStyles, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography, Paper, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { CurrentMap } from '../../components'
import { SendAmbulance_style } from '../../style'

const SendAmbulance = (props) => {

   const classes = SendAmbulance_style()

   const [AmbulanceList, setAmbulanceList] = useState(false)
   const [Ambulancepoint, setAmbulancepoint] = useState(null)
   const [totalPages, settotalPages] = useState(5)

   useEffect(() => {
       if(props.handleClickOpen !== null){
            handleClickOpen()
       }
   }, [props])

   const createData = (imageURL, licenseplate) => {
    return { imageURL, licenseplate };
    }

    const LicensePlate = [
            createData('imageURL', 'กบ 123'),
            createData('imageURL', 'กบ 123'),
            createData('imageURL', 'กบ 123'),
            createData('imageURL', 'กบ 123'),
            createData('imageURL', 'กบ 123'),
    ]

   const handleClose = () => {
    setAmbulanceList(false);
   }

   const handleClickOpen = () => {
    setAmbulanceList(true);
   }

    return(
        <Dialog aria-labelledby="scroll-dialog-title" onClose={handleClose} open={AmbulanceList} fullWidth={true} maxWidth={"md"} classes={{ paper: classes.dialogPaper }} scroll={"paper"}>
            <DialogTitle onClose={handleClose} id="scroll-dialog-title">
                <Typography className={classes.Texstyle}>รายการว่าง</Typography>
                <Grid item xs={12} justify="center" container className={classes.YourCurrent}> 
                    <Grid item xs={10}>
                        <Typography className={classes.subtitlestyle}>สามารถเลือกรายการรถว่างให้กับผู้ร้องขอ</Typography>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Grid item xs={12} container className={classes.GoogleMapstyle} justify="center">
                    <Paper className={classes.Papercontainer}>
                    <Grid className={classes.rootcontainer} container justify="center">
                        {LicensePlate.map(({ imageURL, licenseplate}, index) => (
                            <Paper key={index} className={classes.Papercontainer}>
                            <Grid item xs={2} container justify="flex-start" alignItems="center" className={classes.Namecolumnstyle}>
                                    <Avatar src={imageURL}></Avatar>
                            </Grid>
                            <Grid item xs={6} container justify="flex-start" alignItems="center">
                            <Typography className={classes.Textstyle}>{licenseplate}</Typography>
                            </Grid>
                            <Grid item xs={4} container justify="center" alignItems="center">
                            <Grid item xs={6}>
                                <Button className={classes.checkRadiusBuuton} onClick={() => setAmbulancepoint(index)}>ดูพิกัด</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button className={classes.successAmbulanceButton}>มอบหมายรถ</Button>
                            </Grid>
                            </Grid>
                            </Paper>
                        ))}
                    </Grid>
                    </Paper>
                    <CurrentMap handleClickOpen={Ambulancepoint}/>
                </Grid>
            </DialogContent>
            <DialogActions className={classes.DialogActions}>
            <Grid container justify="flex-end" className={classes.Paginationstyle}>
                            <Link  className={classes.Linkstyle}  className='page-link'>
                                <Button className={classes.Buttonstyle} > ย้อนกลับ </Button>
                            </Link>
                    {
                        Array.from({ length: totalPages }).map((_, index) => {
                            const currentIndex = index + 1

                            return (
                            <Link  key={currentIndex} className={classes.Linkstyle}
                                // to={`URL ?page=${currentIndex}`}
                                className='page-link'>
                                <Button className={classes.Buttonstyle} >

                                        {currentIndex}
                                    
                                </Button>
                            </Link>

                            )
                        }) 
                    }
                            <Link className={classes.Linkstyle} className='page-link'>
                                <Button className={classes.Buttonstyle}> ต่อไป </Button>
                            </Link>
                </Grid>
            </DialogActions>
      </Dialog>
    )
}


export default SendAmbulance