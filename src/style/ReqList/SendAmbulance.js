import { makeStyles } from '@material-ui/core'

const SendAmbulance_style = makeStyles(theme => ({
    Texstyle: {
        fontFamily: 'rsuregular',
        fontSize: "40px",
        color: "#1DA6EC",
        textShadow: "2px 2px rgba(0, 0, 0, 0.19)",
        marginLeft: "40px",
        fontWeight: 'bold'
    },
    subtitlestyle: {
        fontFamily: 'rsuregular',
        fontSize: "35px",
        color: "#1DA6EC",
        marginLeft: "40px",
    },
    Paperstyle: {
        borderRadius: "40px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    containerstyle: {
        paddingLeft: "20px",
        paddingRight: "20"
    },
    dialogPaper: {
            minHeight: '90vh',
            maxHeight: '90vh',
            borderRadius: "20px",
    },
    DialogActions: {
        paddingBottom: "30px"
    },
    GoogleMapstyle: {
        // marginTop : "10px"
    },
    YourCurrent: {
        marginBottom: "7px"
    },
    Papercontainer: {
        width: "95%",
        display: "flex",
        borderRadius: "10px",
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
    },
    checkRadiusBuuton: {
        background: `linear-gradient(to right, #2ED8E5 , #266EEE);`,
        color: "#fff",
        fontFamily: 'rsuregular',
        fontSize: "20px",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
        marginTop: "5px",
        marginBottom: "5px",
        minWidth: "100px",
        borderRadius: "11px"
    },
    successAmbulanceButton: {
        background: `linear-gradient(to right, #0AD238 , #28DDCB);`,
        color: "#fff",
        fontFamily: 'rsuregular',
        fontSize: "20px",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.30)",
        marginTop: "5px",
        marginBottom: "5px",
        minWidth: "100px",
        borderRadius: "11px"
    },
    Namecolumnstyle: {
        paddingLeft: "60px"
    },
    Paginationstyle: {
        marginBottom: "30px",
        marginRight: "40px"
    },
    Linkstyle: {
        color: '#000000', 
        textDecoration: 'none'
    },
    Buttonstyle: {
        backgroundColor: "#fff",
        fontFamily: 'rsuregular',
        fontSize: "20px",
        border: "1px solid #dbdbdb",

    }
}));

export default SendAmbulance_style