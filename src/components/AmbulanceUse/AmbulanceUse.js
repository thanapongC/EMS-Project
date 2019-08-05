import React from 'react';
import { makeStyles, Grid, Paper, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { CommuteOutlined } from '@material-ui/icons'

import { AmbulanceTable } from '../../components'
import { AmbulanceUse_style } from '../../style'

const AmbulanceUse = (props) => {
   const classes = AmbulanceUse_style()
    return(
        <Grid item xs={12} container className={classes.containerstyle}>
            <Grid item xs={3} className={classes.TitlestyleDesktop}>
                <Paper className={classes.Paperstyle}>
                <ListItem button>
                    <ListItemIcon>
                        <CommuteOutlined className={classes.IconHeadingStyle}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography type="body2" className={classes.Texstyle}>รายการรถใช้งาน</Typography>} className={classes.Headerfontstyle}/>
                </ListItem>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.PaperList}>
                    <Grid item xs={12}>
                        <AmbulanceTable/>
                    </Grid>
                    <Grid item xs={12} justify>

                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default AmbulanceUse
