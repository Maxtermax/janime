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
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import AsideMenu from './AsideMenu.js'
import { styles } from '../../../styles/Header.js'

class SearchAppBar extends React.Component {
  constructor() {
    super();
    this.timeout = null;
  }

  stopTyping(value) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(()=> {
      this.props.handleSearch(value);      
    }, 250);
  }


  render() {
    const { classes, theme, genres, setup } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerState.bind(this)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="center">
              <Grid item xs={12} sm={10} md={8} lg={6}>
                <div className={classes.inputContainer}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Buscar"
                    ref={"searchInput"}
                    onChange={ (e) => this.stopTyping(e.target.value)}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AsideMenu
          genres={genres}
          handleDrawerState={this.props.handleDrawerState.bind(this)}
          handleGenresState={this.props.handleGenresState.bind(this)}
          play={this.props.play.bind(this)}
          setup={setup.drawerState}
        />
      </div>
    );
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);