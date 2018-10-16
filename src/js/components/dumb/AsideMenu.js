import React from 'react'
import ReactDOM from 'react-dom'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import Slider from '@material-ui/lab/Slider'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../styles/AsideMenu.js'

class AsideMenu extends React.Component {
  constructor() {
    super();
  }

  getFeatures() {
    let features = this.props.genres.data.filter(gender => gender.value > 0); 
    this.props.play(features);
  }

  render() {
    let { setup, classes, genres } = this.props;
    let { open } = setup;
    return (
      <Drawer
        variant="persistent"
        anchor={"left"}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.props.handleDrawerState.bind(this)}>
            <ChevronLeftIcon />
          </IconButton>
          <div className={classes.containerButtonPlay}>
            <Button variant="contained" onClick={this.getFeatures.bind(this)} color="secondary" className={classes.buttonPlay} >Play</Button>
          </div>
        </div>

        <List className={classes.featureList}>
          {
            genres.data.map(({ name, value }, index) => {
              return (
                <div key={index}>
                  <span className={classes.genresName}>{name}</span>
                  <span className={classes.genresValue}>{value}</span>
                  <Slider
                    classes={{ container: classes.slider }}
                    value={value}
                    min={0}
                    max={10}
                    onChange={(event, value) => this.props.handleGenresState({ index, value })}
                  />
                </div>
              )
            })
          }
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(AsideMenu);