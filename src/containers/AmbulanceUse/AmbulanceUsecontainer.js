import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { AmbulanceUse } from '../../components'

class AmbulanceUsecontainer extends React.Component{

    state = {
        totalPages: "5"
    }
    
    render(){

        const {totalPages} = this.state

        return(
            <Grid>
                <Grid>
                    <AmbulanceUse />
                </Grid>
                <Grid container justify="flex-end" style={style.Paginationstyle}>
                            <Link 
                                style={style.Linkstyle}
                                className='page-link'>
                                <Button
                                    style={style.Buttonstyle}
                                    variant="outlined"
                                    // className={classNames(['page-item', { active: currentIndex === +page }])}
                                    >
                                        ย้อนกลับ
                                </Button>
                            </Link>
                    {
                        Array.from({ length: totalPages }).map((_, index) => {
                            const currentIndex = index + 1

                            return (
                            <Link 
                                key={currentIndex}
                                style={style.Linkstyle}
                                // to={`URL ?page=${currentIndex}`}
                                className='page-link'>
                                <Button
                                    style={style.Buttonstyle}
                                    variant="outlined"
                                    // className={classNames(['page-item', { active: currentIndex === +page }])}
                                    >

                                        {currentIndex}
                                    
                                </Button>
                            </Link>

                            )
                        }) 
                    }
                                <Link 
                                    style={style.Linkstyle}
                                    className='page-link'>
                                    <Button
                                        style={style.Buttonstyle}
                                        variant="outlined"
                                        >
                                            ต่อไป
                                    </Button>
                                </Link>
                </Grid>
            </Grid>
        )
    }
}

export default AmbulanceUsecontainer

const style = {
    spacingToppagination: {
        marginTop: 20
    },
    Buttonstyle: {
        // margin: 5,
        backgroundColor: "#fff",
        fontFamily: 'rsuregular',
        fontSize: "20px",
    },
    Linkstyle: {
        color: '#000000', 
        textDecoration: 'none'
    },
    Paginationstyle: {
        marginTop: "30px",
        marginBottom: "30px"
    },
}