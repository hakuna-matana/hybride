import * as React from 'react'
import * as s from './Order.scss'

export class Order extends React.Component {
  render () :React.ReactNode {
    return (
      <div className={s.root}>
        <a href="/">To landing</a>
        <h1>Order</h1>
        <form>
          <div><input type="text"/></div>
          <div><input type="text"/></div>
          <button>Button</button>
        </form>
      </div>
    )
  }
}