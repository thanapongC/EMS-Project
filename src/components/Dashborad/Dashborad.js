import React, { useState } from 'react';
import { makeStyles, Grid, Paper, ListItem, ListItemIcon, ListItemText, Typography, Button, Avatar } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons'
import { Link, withRouter } from 'react-router-dom'

import { CurrentMap, ButtonStatus, GoogleApiWrapper } from '../../components'
import { Dashborad_style } from '../../style'

const Dashborad = (props) => {
   const classes = Dashborad_style()
   const [Ambulancepoint, setAmbulancepoint] = useState(null)

   const createData = (title, name, surname, status) => {
       return { title, name, surname, status };
   }

   const userGuest = [
           createData('นาย', 'สมศักดิ์', 'มั่งมี', 'ร้องขอรถพยาบาล'),
           createData('นาย', 'มั่งมี', 'ศรีสุข', 'ร้องขอรถพยาบาล'),
           createData('นาย', 'จินดามณี', 'เปล่งเเสง', 'ร้องขอรถพยาบาล'),
   ]
    return(
        <Grid item xs={12} container className={classes.containerstyle}>
            <Grid item xs={3} className={classes.TitlestyleDesktop}>
                <Paper className={classes.Paperstyle}>
                <ListItem>
                    <ListItemIcon>
                        <HomeOutlined className={classes.IconHeadingStyle}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography type="body2" className={classes.TextHeaddingstyle}>หน้าหลัก</Typography>} className={classes.Headerfontstyle}/>
                </ListItem>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.PaperList} >
                    <Grid item xs={12}>
                        <Grid className={classes.rootcontainer} container justify="center">
                            {userGuest.map(({ title, name, surname, status}, index) => (
                                <Paper key={index} className={classes.Papercontainer}>
                                <Grid item xs={4} container justify="flex-start" alignItems="center" className={classes.Namecolumnstyle}>
                                    <Typography className={classes.Textstyle}> {title} { name } { surname } </Typography>
                                </Grid>
                                <Grid item xs={4} lg={5} container justify="center" alignItems="center">
                                    <Typography className={classes.Textstyle}>{status}</Typography>
                                </Grid>
                                <Grid item xs={4} lg={3} container justify="center" alignItems="center">
                                    <Grid item xs={6} lg={6}>
                                        <Button className={classes.checkRadiusBuuton} onClick={() => setAmbulancepoint(index)}>ดูพิกัด</Button>
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Button className={classes.callAmbulanceButton}>จัดส่งรถ</Button>
                                    </Grid>
                                </Grid>
                                </Paper>
                            ))}
                            <CurrentMap handleClickOpen={Ambulancepoint}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} justify="flex-end" container>
                    <Grid item xs={4} lg={2}>
                        <Link to="/peoplerequest" className={classes.Linkstyle}>
                            <Paper className={classes.PaperstyleUse}>
                                <ListItem >
                                    <ListItemText primary={<Typography className={classes.TextButtonstyle}> ดูเพิ่มเติม.. </Typography>} />
                                </ListItem>
                            </Paper>
                        </Link>
                    </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} container>
                <Paper className={classes.Mapscontainer}>
                    <Grid item xs={12} justify="flex-end" container className={classes.YourCurrent}> 
                        <Grid item xs={4} lg={10} className={classes.Currentstatusstyle}>
                            <Typography className={classes.Texstyle}>เเผนที่</Typography>
                        </Grid>
                        <Grid item xs={8} lg={2} className={classes.Currentstatusstyle} container justify="flex-end">
                            <ButtonStatus messages="ตำเเหน่งของคุณ" Buttoncode={"Currentpoint"}/>
                        </Grid>
                        <Grid item xs={12} container className={classes.Mapsstyle}>
                             {/* <GoogleApiWrapper /> */}
                             
                        </Grid>
                        <Grid item xs={12} container>
                            <Grid item xs={6} lg={6} container justify="center" className={classes.Currentstatusstyle}>
                                <ButtonStatus messages="รถว่าง" Buttoncode={"Notuse"}/>
                            </Grid>
                            <Grid item xs={6} lg={6} container justify="center" className={classes.Currentstatusstyle}>
                                <ButtonStatus messages="รถกำลังใช้งานอยู่" Buttoncode={"Use"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default withRouter(Dashborad)
