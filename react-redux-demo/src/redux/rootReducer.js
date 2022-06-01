import iceCreamReducer from "./iceCream/iceCream.reducer";
import cakeReducer from './cake/cake.reducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;