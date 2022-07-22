import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

var initState = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};

const middlewareEnhancer = applyMiddleware(thunk);
const store = createStore(rootReducer, initState, middlewareEnhancer);

console.log('store', store);

export default store;