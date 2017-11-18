// This file is included by /index.js

// Exports the main "ROOT" of the react application

import React from 'react';
import { Route } from 'react-router-dom'
import Homepage from '../homepage/homepage_component'
import BlogPosts from '../blog_posts/blog_posts_component'


const Root = () => (
    <div>
        <main>
            <Route exact path="/blog_posts" component={BlogPosts} />
            <Route exact path="/" component={Homepage} />
        </main>
    </div>
)

export default Root
