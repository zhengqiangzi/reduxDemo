import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduces from '../reduces';
let storeMiddleware=applyMiddleware(thunk)(createStore) 

export default storeMiddleware(reduces)

