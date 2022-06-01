const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default;


const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

// 1. Action Types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// 2. set actions
const fetchUsersRequest = () => {
    return({
        type:FETCH_USERS_REQUEST
    })
}

const fetchUsersSuccess = (users) => {
    return({
        type:FETCH_USERS_SUCCESS,
        payload: users
    })
}

const fetchUsersFailure = (error) => {
    return({
        type:FETCH_USERS_FAILURE,
        payload: error
    })
}

// 3. set up initial state
const INITIAL_STATE = {
    loading: false,
    users: [],
    error: ' '
}

// 4. Reducer

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// 5. Redux store

const store = createStore(reducer,applyMiddleware(thunkMiddleware))

// 6.  Action Creator async

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
            })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message))
            })
    }
}

// 7. finish store config
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers())