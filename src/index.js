import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Willkommen from './components/willkommen'
// import './index.css'

render(
    <Router history={browserHistory}>
      <Route name="Home" path="/" component={App}>
        <IndexRoute name="Willkommen" component={Willkommen} />
      </Route>
    </Router>, document.getElementById('app')
)
