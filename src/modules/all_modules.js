// This file is included by store.js

// Combines all the reducers together to be pushed into the Redux store.

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import blog_posts from './blog_posts_module'
// Include other reducers from other modules here.


export default combineReducers({
    router: routerReducer,
    blog_posts
    // Add other reducers included above here.
})