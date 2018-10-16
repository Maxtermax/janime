import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Header from '../dumb/Header.js'
import Main from '../dumb/Main.js'
import LoadBar from '../dumb/LoadBar.js'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const Evolution = require('../../evolution.js')
var serviceWorker;

const Theme = createMuiTheme({
  palette: {
    primary: { main: "#1d2682", light: "#554fb2", dark: "#000054" },
    secondary: { main: "#db5461", light: "#ff858e", dark: "#a41f37" }
  },
  typography: {
    useNextVariants: true
  }
})

@connect(store => {
  return {
    AnimeStore: Object.assign(store.Anime, {}),
    GenresStore: Object.assign(store.Genres, {}),
    MediatorStore: Object.assign(store.Mediator, {})
  }
})
class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
        if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(function (registration) {
       // self.tryPushNotification();
        if (registration.installing) {
          serviceWorker = registration.installing;
          console.log('installing');
          //self.setState({ loading: true });
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
          //self.setState({ loading: true });
          console.log('waiting');
        } else if (registration.active) {
          serviceWorker = registration.active;
          console.log('active');
          //setTimeout(() => self.setState({ loading: false }), 500);
        }

        if (serviceWorker) {
          console.log('current state ', serviceWorker.state);
          if (serviceWorker.state === 'activated') {
            //setTimeout(() => this.setState({ loading: false }), 1000);
          }
          serviceWorker.addEventListener('statechange', function (e) {
            console.log('current state ', serviceWorker.state);
            if(e.target.state === 'activated') {
              console.log('activated')
              //this.setState({ loading: false });
            }
            if (e.target.state === 'installing') {
              console.log('installing')
              //this.setState({ loading: true });
            }
            if (e.target.state === 'redundant') {
              console.log('new sw replace old sw');
              //this.setState({ loading: true });
            }
          });
        }

      }).catch(function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
        //this.setState({ loading: false });
      });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log("NUEVO SERVICE WORKER LISTO PARA TOMAR EL CONTROL")
        setTimeout(() => window.location.reload(), 500);
      });
    }
  }
  searchAnime(value) {
    this.props.dispatch({ type: 'SEARCH_ANIME', payload: value })
    this.props.dispatch({ type: "SET_LOADING", payload: true });
  }
  evaluate(genres) {
    let { AnimeStore } = this.props;    
    let copyAnimeStore = AnimeStore.data.map((item) => {
      item.genres = item.genres.map(genre => genre);
      return Object.assign({}, item);
    })
    let result = Evolution({ target: { genres, score: 5 }, AnimeStore: copyAnimeStore, totalPopulation: copyAnimeStore.length });
    let anime = copyAnimeStore[result];
    this.props.dispatch({ type: "SEARCH_ANIME", payload: anime.title });
    this.props.dispatch({ type: "SET_LOADING", payload: false });
  }
  render() {
    let { AnimeStore, GenresStore, MediatorStore } = this.props;
    return (
      <MuiThemeProvider theme={Theme}>
        <div>
          {/*<LoadBar display={MediatorStore.setup.loading}/>*/}
          <Header
            handleGenresState={({ index, value }) => this.props.dispatch({ type: "CHANGE_GENRE_VALUE", payload: { index, value } })}
            handleDrawerState={this.props.dispatch.bind(this, { type: "TOOGLE_DRAWER_STATE" })}
            handleSearch={this.searchAnime.bind(this)}
            setup={MediatorStore.setup}
            genres={GenresStore}
            play={this.evaluate.bind(this)}
          />
          <Main 
            handleNotFound={ this.props.dispatch.bind(this, {type: "SET_LOADING", payload: false}) }
            setup={AnimeStore.setup} 
            data={AnimeStore.data} 
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
