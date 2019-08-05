import { makeStyles } from '@material-ui/core';

const Dashborad_style = makeStyles(theme => ({
    Headerfontstyle: {
        color: '#fff',
        display: "flex",
        justifyContent: "center",
        
    },
    Mapsstyle: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.down('md')]: {
            minHeight: "300px",
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: "500px",
        },
    },
    Papercontainer: {
        width: "95%",
        display: "flex",
        borderRadius: "10px",
        marginTop: "20px",
        marginBottom: "20px",
        // marginRight: "70px",
        backgroundColor: "#F5F6FA",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
    },
    Mapscontainer: {
        width: "100%",
        display: "flex",
        borderRadius: "10px",
        marginTop: "20px",
        marginBottom: "20px",
        // marginRight: "70px",
        backgroundColor: "#F5F6FA",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
    },
    Linkstyle: {
        color: '#fff', 
        textDecoration: 'none',
    },
    TextHeaddingstyle: {
        [theme.breakpoints.down('md')]: {
            fontFamily: 'rsuregular',
            fontSize: "30px",
            color: "#fff"
        },
        [theme.breakpoints.up('lg')]: {
            fontFamily: 'rsuregular',
            fontSize: "40px",
            color: "#1DA6EC"
        },
    },
    IconHeadingStyle: {
        [theme.breakpoints.down('md')]: {
            fontSize: "30px",
            color: "#fff"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "40px",
            color: "#07C7FC"
        },
    }, 
    Paperstyle: {
        borderRadius: "40px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
    Currentstatusstyle: {
        padding: "20px"
    },
    PaperstyleUse: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        background: `linear-gradient(to right, #2ED8E5 , #266EEE);`,
        borderRadius: "30px",
        margin: "10px"
    },
    Textstyle: {
        [theme.breakpoints.down('md')]: {
            fontFamily: 'rsuregular',
            fontSize: "15px",
            color: "#A8ABB8",
        },
        [theme.breakpoints.up('lg')]: {
            fontFamily: 'rsuregular',
            fontSize: "30px",
            color: "#A8ABB8",
        },
    },
    TextButtonstyle: {
        fontFamily: 'rsuregular',
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            fontSize: "10px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "20px",
        },
    },
    checkRadiusBuuton: {
        background: `linear-gradient(to right, #2ED8E5 , #266EEE);`,
        color: "#fff",
        fontFamily: 'rsuregular',
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
        borderRadius: "11px",
        [theme.breakpoints.down('md')]: {
            fontSize: "10px",
            minWidth: "50px",
            marginTop: "2px",
            marginBottom: "2px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "20px",
            minWidth: "100px",
            marginTop: "5px",
            marginBottom: "5px",
        },
      },
      callAmbulanceButton: {
        background: `linear-gradient(to right, #0AD238 , #28DDCB);`,
        color: "#fff",
        fontFamily: 'rsuregular',
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
        borderRadius: "11px",
        [theme.breakpoints.down('md')]: {
            fontSize: "10px",
            minWidth: "50px",
            marginTop: "2px",
            marginBottom: "2px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "20px",
            minWidth: "100px",
            marginTop: "5px",
            marginBottom: "5px",
        },
      },
      Namecolumnstyle: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: "5px"
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: "60px"
        },
      },
      Texstyle: {
        fontFamily: 'rsuregular',
        color: "#1DA6EC",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.16)",
        [theme.breakpoints.down('md')]: {
            fontSize: "17px",
            marginLeft: "0px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "30px",
            marginLeft: "5px",
        },
    },
    TitlestyleDesktop: {
        [theme.breakpoints.down('md')]: {
            width: 0,
            display: 'none',
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
        },
    },
    PaperWidthstyle: {
        [theme.breakpoints.down('md')]: {
            width: "100%",
            backgroundColor: "red"
        },
        [theme.breakpoints.up('lg')]: {
            // display: "none",
        },
    }
}));

export default Dashborad_style