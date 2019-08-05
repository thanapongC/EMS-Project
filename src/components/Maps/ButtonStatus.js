import React, {useState, useEffect} from 'react';
import { makeStyles, Grid, Paper, ListItemIcon, ListItem, Typography, ListItemText } from '@material-ui/core';
import { MyLocation, FiberManualRecord } from '@material-ui/icons'

import { ButtonStatus_style } from '../../style'

const ButtonStatus = (props) => {

    const classes = ButtonStatus_style()
    // console.log(props.colorCode)
    if(props.Buttoncode === "Currentpoint"){
        return(
            <Grid className={classes.Paperstyle}>
                <ListItem >
                    <ListItemIcon>
                        <MyLocation style={{color: "#0EBDF7"}}/>
                    </ListItemIcon>
                <ListItemText justifyContent="center" container primary={<Typography className={classes.Currentstyle}> {props.messages} </Typography>} />
                </ListItem>
            </Grid>
        )
    }else if(props.Buttoncode === "Use"){
        return(
            <Grid className={classes.PaperstyleUse}>
                <ListItem >
                    <ListItemIcon>
                        <FiberManualRecord style={{color: "#FFEE00", }}/>
                    </ListItemIcon>
                <ListItemText primary={<Typography className={classes.Texstyle}> {props.messages} </Typography>} />
                </ListItem>
            </Grid>
        )
    }else if(props.Buttoncode === "Notuse"){
        return(
            <Grid className={classes.PaperstyleNotuse}>
                <ListItem >
                    <ListItemIcon container justifyContent="center">
                        <FiberManualRecord style={{color: "#07D800", textShadow: "0 1px 3px rgba(0, 0, 0, 0.16)" }}/>
                    </ListItemIcon>
                <ListItemText primary={<Typography className={classes.Texstyle}> {props.messages} </Typography>} />
                </ListItem>
            </Grid>
        )
    }
}


export default ButtonStatus

