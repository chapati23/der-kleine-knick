import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Header extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }

  render() {
    const {routes} = this.props
    // const page = location.pathname === '/' ? 'willkommen' : location.pathname.split('/')[1]
    const page = routes[routes.length - 1].name
    const headerImg = require("../../../assets/img/" + page + "/header.png")

    return (
      <header styleName="header">
        <img src={headerImg} />
      </header>
    )
  }
}

export default CSSModules(Header, styles)
