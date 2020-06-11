import * as React from 'react'
import './styles/global.style.scss'
import './styles/core.scss'
import { Router } from './containers/Router'

export class Main extends React.Component {
  render () {
    return <Router />
  }
}
