import * as React from 'react'
import * as s from './Layout.scss'

export interface LayoutProps {
  children: React.ReactNode
}

export class Layout extends React.Component<LayoutProps> {
  render () :React.ReactNode {
    return (
      <div className={s.root}>
        {this.props.children}
      </div>
    )
  }
}
