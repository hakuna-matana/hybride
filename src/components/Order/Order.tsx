import * as React from 'react'

export class Order extends React.Component {
  render () :React.ReactNode {
    return (
      <div>
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