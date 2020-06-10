import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { Layout } from '../components/Layout/Layout'

export class Router extends React.Component {
  render (): React.ReactNode {
    return (
      <>
        <BrowserRouter>
          <Layout >
            <Switch>
              {/*<Route exact path='/' component={Main} />*/}
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    )
  }
}
