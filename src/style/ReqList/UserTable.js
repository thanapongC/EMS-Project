import { makeStyles } from '@material-ui/core'

const UserTable_style = makeStyles(theme => ({
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
    rootcontainer: {
      // alignItems: "center",
      // justifyContent: "center"
    },
    Textstyle: {
      [theme.breakpoints.down('md')]: {
          fontFamily: 'rsuregular',
          fontSize: "15px",
          color: "#A8ABB8",
      },
      [theme.breakpoints.up('md')]: {
          fontFamily: 'rsuregular',
          fontSize: "30px",
          color: "#A8ABB8",
      },
  },
  Namecolumnstyle: {
    [theme.breakpoints.down('md')]: {
        paddingLeft: "5px"
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: "60px"
    },
  },
    checkRadiusBuuton: {
      background: `linear-gradient(to right, #2ED8E5 , #266EEE);`,
      color: "#fff",
      fontFamily: 'rsuregular',
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
      [theme.breakpoints.down('md')]: {
          fontSize: "10px",
          minWidth: "50px",
          marginTop: "2px",
          marginBottom: "2px",
          borderRadius: "7px",
      },
      [theme.breakpoints.up('md')]: {
          fontSize: "20px",
          minWidth: "100px",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius: "11px",
      },
    },
    callAmbulanceButton: {
      background: `linear-gradient(to right, #0AD238 , #28DDCB);`,
      color: "#fff",
      fontFamily: 'rsuregular',
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
      [theme.breakpoints.down('md')]: {
          fontSize: "10px",
          minWidth: "50px",
          marginTop: "2px",
          marginBottom: "2px",
          borderRadius: "7px",
      },
      [theme.breakpoints.up('md')]: {
          fontSize: "20px",
          minWidth: "100px",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius: "11px",
      },
    },
  }));

  export default UserTable_style