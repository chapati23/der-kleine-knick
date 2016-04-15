import React, { Component, PropTypes } from 'react'

class App extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>Der kleine Knick</h1>
        </header>
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default App
