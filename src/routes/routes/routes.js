import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { PeopleRequestContainer, AmbulanceUsecontainer, Deshboradcontainer } from '../../containers'
// import { PeopleRequest } from '../../components'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Deshboradcontainer}/>
            <Route exact path='/peoplerequest' component={PeopleRequestContainer}/>
            <Route exact path='/ambulance' component={AmbulanceUsecontainer}/>
        </Switch>
    )
  }

  export default Routes