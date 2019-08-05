import { makeStyles } from '@material-ui/core';

const Notifications_style = makeStyles(theme => ({
    Notistyle: {
        [theme.breakpoints.down('md')]: {
            color: '#fff',
            fontSize: "45px"
          },
          [theme.breakpoints.up('lg')]: {
            color: '#2887EC',
            fontSize: "45px"
          },
    },
    Badgestyle: {
        backgroundColor: "#FF418C",
    },
    margin: {
        margin: theme.spacing(1),
      },
}));

export default Notifications_style
