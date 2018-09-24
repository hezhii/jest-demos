import React from 'react'
import renderer from 'react-test-renderer'

import Text from './Text'

it('render correctly', () => {
  const tree = renderer
    .create(<Text className="success">Snapshot testing</Text>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})