// This file is included by modules/all_modules.js (For the reducers)
// This file is also included by components/blog_posts/blog_posts_component.js (For the actions)

// This file contains the actions and reducers for the blog posts functionality

import axios from 'axios';


// Initial Module State
const initialState = {
    currently_fetching_blog_posts: false,
    blog_post_fetch_error: null,
    blog_post_data: null
}


// Redux Actions - Payloads of information that send data from your application to your store.
// http://redux.js.org/docs/basics/Actions.html
export const FETCH_BLOGPOST_REQUESTED = 'blog_posts/FETCH_BLOGPOST_REQUESTED'
export const FETCH_BLOGPOST_SUCCESS = 'blog_posts/FETCH_BLOGPOST_SUCCESS'
export const FETCH_BLOGPOST_ERROR = 'blog_posts/FETCH_BLOGPOST_ERROR'


// Redux Action Creators - Functions that create actions
// http://redux.js.org/docs/basics/Actions.html#action-creators
export const blogPostFetch = () => {

    console.log("blogPostFetch called");

    return dispatch => {

        console.log("blogPostFetch start");
        
        dispatch({
            type: FETCH_BLOGPOST_REQUESTED
        })

        return axios.get(`https://jsonplaceholder.typicode.com/posts`)
            
            .then((response) => {
                console.log("blogPostFetch success:", response.data);
                dispatch({
                    type: FETCH_BLOGPOST_SUCCESS,
                    payload: response.data
                })
            })
            
            .catch((error) => {
                console.log("blogPostFetch error:", error);
                dispatch({
                    type: FETCH_BLOGPOST_ERROR,
                    payload: error
                })
            });
    
    }

}


// Redux Reducers - Specify how the application's state changes in response to actions
// http://redux.js.org/docs/basics/Reducers.html
export default (state = initialState, action = {}) => {
    switch (action.type) {

        case FETCH_BLOGPOST_REQUESTED:
            return {
                ...state,
                currently_fetching_blog_posts: true,
                blog_post_fetch_error: null
            }

        case FETCH_BLOGPOST_SUCCESS:
            return {
                ...state,
                currently_fetching_blog_posts: false,
                blog_post_fetch_error: null,
                blog_post_data: action.payload // loading the blog posts into the state
            }

        case FETCH_BLOGPOST_ERROR:
            return {
                ...state,
                currently_fetching_blog_posts: false,
                blog_post_fetch_error: action.payload, // Loading error text
                blog_post_data: null
            }

        default:
            return state

    }
}
