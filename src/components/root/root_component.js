// This file is included by /index.js

// Exports the main "ROOT" of the react application

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Homepage from '../homepage/homepage_component'
import BlogPosts from '../blog_posts/blog_posts_component'
import Login from '../login/login_component'
import {
    auth
} from '../../lib/authentication'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.has() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
        )
    )} />
)

const Root = () => (
    <div>
        <main>
            <PrivateRoute exact path="/blog_posts" component={BlogPosts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Homepage} />
        </main>
    </div>
)

export default Root
