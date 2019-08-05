import { makeStyles } from '@material-ui/core'

const PeopleRequest_style = makeStyles(theme => ({
    Headerfontstyle: {
        color: '#fff',
        display: "flex",
        justifyContent: "center",
        
    },
    Texstyle: {
        fontFamily: 'rsuregular',
        fontSize: "40px",
        color: "#1DA6EC"
    },
    IconHeadingStyle: {
        fontSize: "40px",
        color: "#07C7FC"
    }, 
    Paperstyle: {
        borderRadius: "40px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    TitlestyleDesktop: {
        [theme.breakpoints.down('md')]: {
            width: 0,
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
        },
    },
    containerstyle: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: "10px",
            paddingRight: "10px"
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: "20px",
            paddingRight: "20px"
        },
    },
    PaperList: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        [theme.breakpoints.down('md')]: {
            marginTop: "5px"
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: "30px"
        },
    },
}));

export default PeopleRequest_style