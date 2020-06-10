import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { Layout } from '../components/Layout/Layout'
import {Order} from "../components/Order/Order";

export class Router extends React.Component {
  render (): React.ReactNode {
    return (
      <>
        <BrowserRouter>
          <Layout >
            <Switch>
              <Route exact path='/order' component={Order} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    )
  }
}
