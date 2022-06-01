import cakeActionTypes from "./cake.types"

const INITIAL_STATE = {
    numOfCakes: 10
}


const cakeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case cakeActionTypes.BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes -1
            }
        default:
            return state
    }
}

export default cakeReducer
