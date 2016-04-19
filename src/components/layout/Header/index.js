import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Header extends Component {
  render() {
    const page = location.pathname === '/' ? 'willkommen' : location.pathname.split('/')[1]
    const headerImg = require("../../../assets/img/" + page + "/header.png")

    return (
      <header styleName="header">
        <img src={headerImg} />
      </header>
    )
  }
}

export default CSSModules(Header, styles)
