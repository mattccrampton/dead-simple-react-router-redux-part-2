// This file is included by /components/root/root_comonent.js

// This is the root of the blog posts section of the application

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    loginPost
} from '../../modules/login_module'


class Login extends Component {

    constructor (props) {

        super(props)
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this)

    }

    // componentWillMount() {
    // }

    handleLoginFormSubmit (event) {

        event.preventDefault()
        // console.log(event)
        // console.log("fs this.props", this.props)
        // console.log("calling loginPost()...")
        this.props.loginPost()

    }

    renderLoginStatus () {

        // console.log("re this.props", this.props)
        // If we have a login error, show this...
        const { login_error, currently_sending_login_post } = this.props
        if (login_error !== null) {

            return (
                <div>
                    A login error occured:
                    { login_error }
                </div>
            )

        }

        // If we are currently logging in, show this...
        if (currently_sending_login_post === true) {

            return (
                <div>
                    Logging in...
                </div>
            )

        }

        return (

            <div />

        )

    }

    renderLoginData () {

        const { login_return_data } = this.props

        // console.log("Getting logindata")
        // console.log("rld this.props", this.props)
        // console.log("xxxxxxx  login_return_data", this.props.login_return_data)

        return (
            <div>
                { login_return_data }
            </div>
        )

    }

    // Return the completely assembled component
    render () {

        // console.log("r this.props.login_return_data", this.props.login_return_data)
        // console.log("typeof this.props.login_return_data", typeof this.props.login_return_data)
        return (
            <div>

                <p>
                    <Link to="/">
                        Homepage
                    </Link>
                    |
                    <Link to="/blog_posts">
                        Blog Posts (requires login)
                    </Link>
                    |
                    Login
                </p>

                { this.renderLoginStatus() }

                <form method="POST" onSubmit={this.handleLoginFormSubmit}>
                    <fieldset>
                        <legend>Login:</legend>
                        <p>username: <input type="text" name="username" /></p>
                        <p>password: <input type="password" name="password" /></p>
                        <input type="submit" value="Login" />
                    </fieldset>
                </form>

            </div>
        )

    }

}

// Makes the following data available in the Component's this.props object
const mapStateToProps = (state) => ({
    root_state: state,
    login_return_data: state.login.login_return_data,
    currently_sending_login_post: state.login.currently_sending_login_post,
    login_error: state.login.login_error
})

// Makes the following dispatch functions (defined in various modules) available in the Component's this.props object
const mapDispatchToProps = (dispatch) => bindActionCreators({
    loginPost
}, dispatch)

// Connects the state vars and dispatch functions to the Component and exports it to it's React parent component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
