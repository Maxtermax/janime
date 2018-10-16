import { combineReducers } from 'redux'
import Anime from './Anime.js'
import Genres from './Genres.js'
import Mediator from './Mediator.js'

export default combineReducers({
  Anime,
  Genres,
  Mediator
})

