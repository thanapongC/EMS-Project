import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const Header = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      background: '#E9E9E9',
      [theme.breakpoints.down('md')]: {
        Width: "100%",
        background: `linear-gradient(to right, #2DC9E7, #277CED);`,
      },
      [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    MenuIconstyle: {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        color: "#fff"
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    IconMenustyle: {
      color: "#fff",
      fontSize: "50px"
    },
    drawerDesktop: {
      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        width: 0,
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      background: `linear-gradient(to top right, #277CED, #2DC9E7);`,
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    rightIcon:{
      color: '#fff',
      width: 30,
      height: 30
    },
    Languagepadding: {
      paddingLeft: 5,
      paddingRight: 5
    },
    iconlngstyle: {
      width: 30,
      height: 30
    },
    Logo: {
      color: '#fff',
      fontSize: "80px",
      fontWeight: 'bold',
      fontFamily: 'rsuregular',
      textShadow: "7px 7px 4px rgba(0, 0, 0, 0.16)",
      padding: 0,
      margin: 0
    },
    LogoMobilestyle: {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        margin: 0
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    TitlestyleMobile: {
      [theme.breakpoints.down('md')]: {
          display: "flex",
          background: `linear-gradient(to right, #2DC9E7, #277CED);`,
      },
      [theme.breakpoints.up('lg')]: {
          display: "none",
      },
    },
    IconHeadingStyle: {
      [theme.breakpoints.down('md')]: {
          fontSize: "20px",
          color: "#fff"
      },
      [theme.breakpoints.up('lg')]: {
          fontSize: "40px",
          color: "#07C7FC"
      },
    }, 
    TextHeaddingstyle: {
      [theme.breakpoints.down('md')]: {
          fontFamily: 'rsuregular',
          fontSize: "20px",
          color: "#fff"
      },
      [theme.breakpoints.up('lg')]: {
          fontFamily: 'rsuregular',
          fontSize: "40px",
          color: "#1DA6EC"
      },
    },
    SidebarMobilestyle: {
      [theme.breakpoints.down('md')]: {
          display: "flex",
          width: "100%",
          backgroundColor: "rgb(29, 166, 236, 0.9)",
      },
      [theme.breakpoints.up('lg')]: {
          display: "none"
      },
    },
    CloseIconstyle: {
      [theme.breakpoints.down('md')]: {
        fontFamily: 'rsuregular',
        fontSize: "30px",
        fontWeight: "bold",
        color: "#fff",
        margin: "10px"
      },
    },
    IconLinkStyle: {
      fontSize: "100px",
      color: "#fff"
    },
    FontMenuMobilestyle: {
      fontSize: "24px",
      color: "#fff",
      fontFamily: 'rsuregular',
    }
  }));

  export default Header