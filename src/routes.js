import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Routes from './routes'

import App from './components/App'
import Willkommen from './components/Willkommen'
import Schultueten from './components/Schultueten'
import Shop from './components/Shop'
import UeberUns from './components/UeberUns'
import Kontakt from './components/Kontakt'
import Impressum from './components/Impressum'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute name="willkommen" component={Willkommen} />
      <Route name="schultueten" path="schultueten" component={Schultueten} />
      <Route name="shop" path="shop" component={Shop} />
      <Route name="ueber-uns" path="ueber-uns" component={UeberUns} />
      <Route name="kontakt" path="kontakt" component={Kontakt} />
      <Route name="impressum" path="impressum" component={Impressum} />
    </Route>
  </Router>
)
