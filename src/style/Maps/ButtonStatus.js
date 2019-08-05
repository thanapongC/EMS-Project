import { makeStyles } from '@material-ui/core'

const ButtonStatus_style = makeStyles((theme) => ({
    Paperstyle: {
        display: "flex",
        justifyContent: "center",
    },
    PaperstyleUse: {
        display: "flex",
        justifyContent: "center",
    },
    PaperstyleNotuse: {
        display: "flex",
        justifyContent: "center",
    },
    Texstyle: {
        fontFamily: 'rsuregular',
        color: "#454F63",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            fontSize: "15px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "20px",
        },
    },
    Currentstyle: {
        fontFamily: 'rsuregular',
        color: "#454F63",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            fontSize: "5px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "20px",
        },
    },
}));

export default ButtonStatus_style