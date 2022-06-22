import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Example, ExampleProps } from './'

export default {
  title: 'Example',
  component: Example,
} as ComponentMeta<typeof Example>

const Template: ComponentStory<typeof Example> = (props) => <Example {...props} />

export const Default = Template.bind({})

Default.args = {
  title: 'hello',
  description: 'kozloff',
} as ExampleProps
