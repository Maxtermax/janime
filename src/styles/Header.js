import { fade } from '@material-ui/core/styles/colorManipulator'
export const styles = (theme) => {
  return ({
    root: {
      width: '100%',
    },
    inputContainer: {
      height: 40,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 0,
      borderColor: 'black',
      borderStyle: 'solid'
    },
    inputRoot: {
      width: '100%'
    },
    inputInput: {
      backgroundColor: 'white',
      padding: 10,
      paddingLeft: 38,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      transition: 'all 0.25s ease-in-out',
      color: 'white',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      }
    },
    searchIcon: {
      width: 33,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      marginLeft: 3
    }
  })
};