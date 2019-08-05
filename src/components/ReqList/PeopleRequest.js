import React from 'react';
import { makeStyles, Grid, Paper, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { ListAltOutlined } from '@material-ui/icons'

import { UserTable } from '../../components'
import { PeopleRequest_style } from '../../style'

const PeopleRequest = (props) => {
   const classes = PeopleRequest_style()
    return(
        <Grid container className={classes.containerstyle}>
            <Grid item xs={3} className={classes.TitlestyleDesktop}>
                <Paper className={classes.Paperstyle}>
                <ListItem button>
                    <ListItemIcon>
                        <ListAltOutlined className={classes.IconHeadingStyle}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography type="body2" className={classes.Texstyle}>รายการร้องขอรถ</Typography>} className={classes.Headerfontstyle}/>
                </ListItem>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.PaperList}>
                    <Grid item xs={12}>
                        <UserTable/>
                    </Grid>
                    <Grid item xs={12} justify>

                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default PeopleRequest
