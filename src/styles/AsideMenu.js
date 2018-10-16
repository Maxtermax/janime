import { fade } from '@material-ui/core/styles/colorManipulator'
export const styles = (theme) => {
  return ({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: 0,
      ...theme.mixins.toolbar,
      position: 'fixed',
      zIndex: 30,
      backgroundColor: 'white',
      width: 250
    },
    slider: {
      padding: '22px 0px'
    },
    featureList: {
      padding: 14,
      marginTop: 70,
      backgroundColor: 'white',
      width: 228
    },
    button: {
      margin: theme.spacing.unit,
    },
    containerButtonPlay: {
      padding: 5,
      width: 200,
      textAlign: 'center'
    },
    buttonPlay: {
      width: 180
    },
    genresName: {
      ...theme.typography.button,
      color: theme.palette.grey['800']
    },
    genresValue: {
      float: 'right',
      ...theme.typography.button,
      color: theme.palette.grey['800']
    },
    menuButton: {
      marginLeft: 10,
      marginRight: 10,
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        marginRight: 0,
        padding: 5
      }
    }
  })
};