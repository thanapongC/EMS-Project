import { makeStyles } from '@material-ui/core';

const Sidebar = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    Linkstyle: {
        color: '#fff', 
        textDecoration: 'none',
    },
    Logo: {
        color: '#fff',
        fontSize: "100px",
        fontWeight: 'bold',
        fontFamily: 'rsuregular'
    },
    Texstyle: {
        fontFamily: 'rsuregular',
        fontSize: "30px",
    },
    Iconstyle: {
        fontSize: "40px",
        color: "#fff"
    }
}));

export default Sidebar
