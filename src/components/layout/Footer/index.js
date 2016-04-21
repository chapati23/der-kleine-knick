import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

import { Link } from 'react-router'

class Footer extends Component {
  render() {
    return (
      <footer styleName="footer">
        {/*<Link styleName="impressum" to="impressum">Impressum</Link>
        <section styleName="social-icons">
          <a href="">fb</a>
          <a href="">insta</a>
          <a href="">pntrst</a>
          </section>*/}
      </footer>
    )
  }
}

export default CSSModules(Footer, styles)
