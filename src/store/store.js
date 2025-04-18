



import { legacy_createStore as createStore, compose, combineReducers } from 'redux'
import { toyReducer } from './toys/toy.reducer.js'

const rootReducer = combineReducers({
    toyModule: toyReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
