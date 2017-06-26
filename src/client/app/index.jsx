import React from 'react'
import {render} from 'react-dom'
import Generator from './Generator.jsx'

class App extends React.Component {
  render () {
    return (
        <div>
        <Generator />
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'))