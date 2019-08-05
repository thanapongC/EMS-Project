import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import {List, ListItem, ListItemIcon, ListItemText, Typography, Grid} from '@material-ui/core';
import { HomeOutlined, CommuteOutlined, ListAltOutlined} from '@material-ui/icons';

import { Sidebar_Style } from '../../style'

const SideBar = () => {
    const classes = Sidebar_Style();
    return(
        // <div className={classes.Backgroundcolor}>
            <div className={classes.toolbar} >
                <Grid container justify="center">
                <Typography className={classes.Logo}>
                    EMS
                </Typography>
                </Grid>
            <List>
                <Link to="/" className={classes.Linkstyle}>
                <ListItem button key= "หน้าหลัก">
                        <ListItemIcon><HomeOutlined className={classes.Iconstyle}/></ListItemIcon>
                        <span className={classes.Texstyle}>หน้าหลัก</span>
                    </ListItem>
                </Link>
            </List>
            <List>
                <Link to="/peoplerequest" className={classes.Linkstyle}>
                <ListItem button>
                        <ListItemIcon><ListAltOutlined className={classes.Iconstyle}/></ListItemIcon>
                        <span className={classes.Texstyle}>รายการร้อง <br /> ขอรถ</span>
                    </ListItem>
                </Link>
            </List>
            <List>
                <Link to="/ambulance" className={classes.Linkstyle}>
                    <ListItem button>
                        <ListItemIcon><CommuteOutlined className={classes.Iconstyle}/></ListItemIcon>
                            <span className={classes.Texstyle}>รถกำลัง <br /> ถูกใช้งาน</span>
                    </ListItem>
                </Link>
            </List>
            </div>
    // </div>
  )
}

export default withRouter(SideBar)

