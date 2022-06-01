const redux = require('redux');
const createStore = redux.createStore;



// 1. Define the type of the action --- recommended
const BUY_CAKE = 'BUY_CAKE';

// 2. Define an action

// {
//     type: BUY_CAKE,
//     info: 'First Redux action'
// }

// 3. Create an action creator

function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

// 4. Create a Reducer

//// 4.1 Define Initial State

const INITIAL_STATE = {
    numOfCakes: 10
}

//// 4.2 Define Reducer Function
 
const reducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes-1
            }
        default:
            return state
    }
}

// 5. Create Redux store
/// ** Only one store for the whole application

const store = createStore(reducer)


console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe();

