import { createStore } from 'redux'
import reducers from '../reducers'
import Anime from './Anime.js'
import Genres from './Genres.js'
import Mediator from './Mediator.js'
const initialState = { Anime, Genres, Mediator };

function generateStore(preloadState = initialState) {
  let devtool = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  let store;
  if(devtool) {
    store = createStore(reducers, preloadState, devtool);
  } else {
    store = createStore(reducers, preloadState);
  }
  return store;
}

export default generateStore;
