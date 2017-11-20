// This file is included by /components/root/root_component.js

// This is the root of the "Homepage" section of the application

import React from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => (
    <div>
        
        <p>
            Homepage | <Link to="/blog_posts">Blog Posts (requires login)</Link> | <Link to="/login">Login</Link>
        </p>

        <h2>This is the Homepage</h2>
        
        
        <p>
            (There is no dynamic content on this page)
        </p>
    
    </div>
)

export default Homepage
