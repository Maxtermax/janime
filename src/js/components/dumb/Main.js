import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { styles } from '../../../styles/Main.js'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';

class Main extends React.Component {
  constructor() {
    super();
  }

  expandItem(id) {
    //let synopsis = ReactDOM.findDOMNode(this.refs.synopsis);
    document.getElementById(id).classList.toggle("block-with-text");
  }

  render() {
    const { classes, data, setup } = this.props;
    let list = data.filter(({ title }) => {
      let lower = title.toLowerCase();
      return setup.filterBy.test(lower)
    })
    if (list.length === 0) {
      return (
        <h1 className={classes.notFound}>No encontrado</h1>
      )
    }

    return (
      list.map(({ title, trailer_url, image_url, genres, synopsis }, index) => (
        <Paper key={index} className={classes.paper} elevation={1} >
          <div className={classes.root}>
            <li className={classes.animeItem}>
              <div className={classes.wrapImage} style={{ backgroundImage: `url(${image_url})` }}></div>
              <div className={classes.wrapContent}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.wrapGenres}>
                   <span className={classes.genreName}> { genres.join(" | ") }</span>
                </div>                  
                <p id={`synopsis-${index}`} className={`block-with-text ${classes.sipnosis}`}>
                  {synopsis}
                </p>
                <small className={classes.readMore} onClick={this.expandItem.bind(this, `synopsis-${index}`)}>Leer mas/menos</small>
                {
                  trailer_url ? <Button color="primary" target="_blank" href={trailer_url} className={classes.btnTrailer}>Trailer</Button> : null
                }
              </div>
            </li>
          </div>
        </Paper>
      ))
    )
  }
}
export default withStyles(styles)(Main);