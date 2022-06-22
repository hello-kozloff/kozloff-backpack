import * as React from 'react'
import { ExampleProps } from './types'

export const Example = ({ title, description }: ExampleProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}
