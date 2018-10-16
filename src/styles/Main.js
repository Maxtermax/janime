export const styles = (theme) => {
  console.log(theme)
  return (
    {
      notFound: {
        ...theme.typography.h4,
        color: theme.palette.error.main,
        margin: '0px auto',
        textAlign: 'center',
        padding: 50
      },
      paper: {
        width: theme.breakpoints.values.md,
        margin: '0px auto',
        [theme.breakpoints.down('md')]: {
          width: '80%'
        }
      },
      root: {
        margin: '50px auto'
      },
      btnTrailer: {
        float: 'right',
        marginRight: 20,
        marginBottom: 20
      },
      title: {
        ...theme.typography.h2,
        color: theme.palette.secondary.main,
        marginBottom: 10,
        marginTop: 10,
        [theme.breakpoints.down('md')]: {
          fontSize: 30,
          padding: 10
        }
      },
      clip: {
        ...theme.typography.subtitle2
      },
      wrapGenres: {
        marginBottom: 5,
        padding: 5
      },
      genreName: {
        ...theme.typography.subtitle2,
        [theme.breakpoints.down('md')]: {
          margin: 10
        }
      },
      readMore: {
        ...theme.typography.subtitle2,     
        top: -11,
        position: 'relative',
        cursor: 'pointer',
        opacity: 0.5,
        transition: 'all 0.25s ease-in-out',
        paddingLeft: 10,
        '&:hover': {
          opacity: 1
        }
      },
      sipnosis: {
        ...theme.typography.body1,
        marginTop: 2,
        paddingRight: '2.5em',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 10,
        transition: 'all 0.25s ease-in-out'
      },
      animeItem: {
        display: 'grid',
        gridAutoColumns: '0fr 1fr',
        gridAutoRows: '1fr',
        gridGap: '20px',
        transition: 'all 0.25s ease-in-out',
        [theme.breakpoints.down('md')]: {
          gridGap: '0px',
          gridAutoColumns: '1fr',
          gridAutoRows: '0fr 1fr',
        }
      },
      wrapImage: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: `${theme.shape.borderRadius}px 0px 0px ${theme.shape.borderRadius}px`,
        gridArea: '1/1',
        height: '100%',
        maxHeight: 500,
        width: 300,
        [theme.breakpoints.down('md')]: {
          width: 'auto',
          borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
          height: 200
        }
      },
      wrapContent: {
        gridArea: '1/2',
        [theme.breakpoints.down('md')]: {
          width: 'auto',
          gridArea: '2/1',
          padding: 1
        }
      }
    }
  )
}
