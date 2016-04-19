import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

import { Link } from 'react-router'

const logoImg = require('../../../assets/img/logo.png')

class Nav extends Component {
  render() {
    return (
      <nav styleName="nav">
        <Link styleName="logo" to="/">
          <img src={logoImg} />
        </Link>
        <Link styleName="text-link" to="/">Willkommen</Link>
        <Link styleName="text-link" to="/schultueten">Schult&uuml;ten</Link>
        <Link styleName="text-link" to="/shop">Shop</Link>
        <Link styleName="text-link" to="/ueber-uns">Über Uns</Link>
        <Link styleName="text-link" to="/kontakt">Kontakt</Link>
      </nav>
    )
  }
}

export default CSSModules(Nav, styles)
