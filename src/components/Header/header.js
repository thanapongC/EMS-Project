import React, { useState } from 'react'
import {AppBar, Toolbar, Drawer, Grid, IconButton, Typography, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Menu, HomeOutlined, CommuteOutlined, ListAltOutlined, Close, CommuteSharp } from '@material-ui/icons';
import { withRouter, Link } from 'react-router-dom'

import { SideBar, Notification } from '../../components'
import { Header_Style } from '../../style'
 
const Header = (props) => {

  const classes = Header_Style();
  const [SidebarOpen, setSidebarOpen] = useState(false)
  const { location: {pathname} } = props
  

  const TitleMoblie = () => {
      if(pathname === "/"){
          return(
            <Grid item xs={12} className={classes.TitlestyleMobile} >
            <Grid container item xs={10}>
                <ListItem>
                    <ListItemIcon>
                        <HomeOutlined className={classes.IconHeadingStyle}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography type="body2" className={classes.TextHeaddingstyle}>Deshborad</Typography>} className={classes.Headerfontstyle}/>
                </ListItem>
            </Grid>
            </Grid>
          )
      }else if(pathname === "/peoplerequest"){
        return(
            <Grid item xs={12} className={classes.TitlestyleMobile} >
            <Grid container item xs={10}>
                <ListItem>
                    <ListItemIcon>
                        <ListAltOutlined className={classes.IconHeadingStyle}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography type="body2" className={classes.TextHeaddingstyle}>รายการร้องขอรถ</Typography>} className={classes.Headerfontstyle}/>
                </ListItem>
            </Grid>
            </Grid>
        )
    }else if(pathname === "/ambulance"){
        return(
            <Grid item xs={12} className={classes.TitlestyleMobile} >
            <Grid container item xs={10}>
                <ListItem>
                    <ListItemIcon>
                        <CommuteOutlined className={classes.IconHeadingStyle}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography type="body2" className={classes.TextHeaddingstyle}>รถกำลังถูกใช้งาน</Typography>} className={classes.Headerfontstyle}/>
                </ListItem>
            </Grid>
            </Grid>
        )
    }
  }

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <Grid item xs={12}>
      <Grid item xs={12} container justify="flex-end">
                <Close className={classes.CloseIconstyle} onClick={() => setSidebarOpen(false)}/>
      </Grid>
      <Grid item xs={12} container justify="center">
                <Typography className={classes.Logo}>
                        EMS
                </Typography>
      </Grid>
      <Grid item xs={12} container>
            <Grid item xs={6} container justify="center">
                <Grid item xs={12} container justify="center">
                <Link to="/" className={classes.Linkstyle}>
                    <HomeOutlined className={classes.IconLinkStyle} onClick={() => setSidebarOpen(false)}/>
                </Link>
                </Grid>
                <Grid item xs={12} container justify="center">
                    <Typography className={classes.FontMenuMobilestyle}>
                    Dashborad
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6} container justify="center">
                <Grid item xs={12} container justify="center">
                <Link to="/peoplerequest" className={classes.Linkstyle}>
                    <ListAltOutlined className={classes.IconLinkStyle} onClick={() => setSidebarOpen(false)}/>
                </Link>
                </Grid>
                <Grid item xs={12} container justify="center">
                    <Typography className={classes.FontMenuMobilestyle}>
                    รายการร้องขอรถ
                    </Typography>
                </Grid>
            </Grid>
      </Grid>
      <Grid item xs={12} container>
            <Grid item xs={6} container justify="center">
                <Grid item xs={12} container justify="center">
                <Link to="/ambulance" className={classes.Linkstyle}>
                    <CommuteOutlined className={classes.IconLinkStyle} onClick={() => setSidebarOpen(false)}/>
                </Link>
                </Grid>
                <Grid item xs={12} container justify="center">
                    <Typography className={classes.FontMenuMobilestyle}>
                    รถกำลังถูกใช้งานอยู่
                    </Typography>
                </Grid>
            </Grid>
      </Grid>
      </Grid>
    </div>
  );

  return(
      <div>
          <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Grid container justify="flex-start" className={classes.MenuIconstyle}>
                        <IconButton
                                edge="start"
                                className={classes.menuButton}
                                onClick={() => setSidebarOpen(true)}
                            >
                                <Menu className={classes.IconMenustyle}/>
                        </IconButton>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Notification/>
                    </Grid>
                </Toolbar>
                <Grid className={classes.LogoMobilestyle}>
                    <Typography className={classes.Logo}>
                        EMS
                    </Typography>
                </Grid>
                {TitleMoblie()}
          </AppBar>
            <Drawer 
                className={classes.drawerDesktop}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}>
                <div className={classes.toolbar} />
                    <SideBar/>
            </Drawer>
            <Drawer open={SidebarOpen} onClose={() => setSidebarOpen(false)}  classes={{ paper: classes.SidebarMobilestyle}}>
                {sideList('left')}
            </Drawer>
      </div>
  )

}

export default withRouter(Header)

