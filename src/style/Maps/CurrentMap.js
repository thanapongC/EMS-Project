import { makeStyles } from '@material-ui/core'

const CurrentMap_style = makeStyles(theme => ({
    Texstyle: {
        fontFamily: 'rsuregular',
        fontSize: "40px",
        color: "#1DA6EC",
        textShadow: "2px 2px rgba(0, 0, 0, 0.19)",
        marginLeft: "40px",
        fontWeight: 'bold'
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
            minHeight: '80vh',
            maxHeight: '80vh',
            borderRadius: "20px",
    },
    DialogActions: {
        paddingBottom: "80px"
    },
    GoogleMapstyle: {
        // marginTop : "10px"
    },
    YourCurrent: {
        marginBottom: "7px"
    }
}));

export default CurrentMap_style