import iceCreamActionTypes from './iceCream.types'


const INITIAL_STATE = {
    numOfIceCreams: 30
}

const iceCreamReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case iceCreamActionTypes.BUY_ICE_CREAM:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams -1
            }
        default:
            return state
    } 
}

export default iceCreamReducer