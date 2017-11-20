import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import Root from './components/root/root_component'

// sets global config on window.app_config
import './config'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Root />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
)
