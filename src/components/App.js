import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import 'normalize.css'
import styles from './App.css'

import Nav from './layout/Nav'
import Header from './layout/Header'
import Footer from './layout/Footer'

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
    routes: PropTypes.array.isRequired
  }

  render() {
    return (
      <div id="react-root">
        <Nav />
        <Header routes={this.props.routes} />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}

export default CSSModules(App, styles)
