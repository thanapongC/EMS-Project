
import React from 'react'
import { IconButton, Badge} from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import  { withRouter, Link } from 'react-router-dom'

import { Notifications_style } from '../../style'

const Notification = () => {
    const classes = Notifications_style();
    return(
        <div>    
          <Link to="/peoplerequest" className={classes.Linkstyle}>      
            <IconButton>
                <Badge badgeContent={3} color="secondary">
                  <Notifications className={classes.Notistyle} />
                </Badge>
            </IconButton>
          </Link>  
        </div>
  )
}

export default withRouter(Notification)
  