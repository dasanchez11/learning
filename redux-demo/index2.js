const redux = require('redux')

const createStore = redux.createStore;
const combineReducer = redux.combineReducers



//// 7.1 redux logger
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();

//// 7.2 apply middleware for logger
const applyMiddleware = redux.applyMiddleware;

// 1. Action types

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// 2. Actions

const buyCake = () =>{
    return{
        type: 'BUY_CAKE',
        info: 'For buying a cake'
    }
}
const buyIceCream = () =>{
    return{
        type: 'BUY_ICE_CREAM',
        info: 'For buying an ice cream'
    }
}

// 3. Initial states

const CAKE_INITIAL ={
    numOfCakes:10
}

const ICE_CREAM_INITIAL ={
    numOfIceCreams:10
}

// 4. CREATE REDUCER

const cakeReducer = (state = CAKE_INITIAL,action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = ICE_CREAM_INITIAL,action) => {
    switch(action.type){
        case BUY_ICE_CREAM:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

// 5. Combine Reducers befor creating a store (root reducer = combination of reducers)
const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// 6. Create Store
// const store = createStore(rootReducer)
//// 7.3 Apply Middleware to the store
const store = createStore(rootReducer, applyMiddleware(logger))

console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe();