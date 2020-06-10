import * as React from 'react'
import './styles/global.style.scss'
import './styles/core.scss'
import { Router } from './containers/Router'

export class App extends React.Component {
  render () {
    return <Router />
  }
}
