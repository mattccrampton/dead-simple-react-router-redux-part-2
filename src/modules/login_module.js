// This file is included by modules/all_modules.js (For the reducers)
// This file is also included by components/login/login_component.js (For the actions)

// This file contains the actions and reducers for the blog posts functionality

import axios from 'axios'
import {
    auth
} from '../lib/authentication'


// Initial Module State
const initialState = {
    currently_sending_login_post: false,
    login_error: null,
    login_return_data: null
}


// Redux Actions - Payloads of information that send data from your application to your store.
// http://redux.js.org/docs/basics/Actions.html
export const LOGIN_POST_REQUESTED = 'login/LOGIN_POST_REQUESTED'
export const LOGIN_POST_SUCCESS = 'login/LOGIN_POST_SUCCESS'
export const LOGIN_POST_ERROR = 'login/LOGIN_POST_ERROR'


// Redux Action Creators - Functions that create actions
// http://redux.js.org/docs/basics/Actions.html#action-creators
export const loginPost = () => {

    // console.log("loginPost called")

    return (dispatch) => {

        auth.clear()
        // Get login data from form here.

        dispatch({
            type: LOGIN_POST_REQUESTED
        })

        return axios.get(`https://jsonplaceholder.typicode.com/posts`) // faking login AJAX here, use your login api instead

            .then((response) => {

                const login_data = "FAKE_LOGIN_DATA" // response.data

                auth.set(login_data)

                dispatch({
                    type: LOGIN_POST_SUCCESS,
                    payload: login_data
                })

            })

            .catch((error) => {

                auth.clear()

                dispatch({
                    type: LOGIN_POST_ERROR,
                    payload: error
                })

            })

    }

}


// Redux Reducers - Specify how the application's state changes in response to actions
// http://redux.js.org/docs/basics/Reducers.html
export default (state = initialState, action = {}) => {

    switch (action.type) {

        case LOGIN_POST_REQUESTED:
            return {
                ...state,
                currently_sending_login_post: true,
                login_error: null
            }

        case LOGIN_POST_SUCCESS:
            return {
                ...state,
                currently_sending_login_post: false,
                login_error: null,
                login_return_data: action.payload // loading the blog posts into the state
            }

        case LOGIN_POST_ERROR:
            return {
                ...state,
                currently_sending_login_post: false,
                login_error: action.payload, // Loading error text
                login_return_data: null
            }

        default:
            return state

    }

}
