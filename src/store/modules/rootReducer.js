import { combineReducers } from 'redux';
import cart from './cart/reducer';

const RootReducer = combineReducers({ cart });

export default RootReducer;
