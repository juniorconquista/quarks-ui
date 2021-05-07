import React from 'react'
import renderer from 'react-test-renderer'
import ThemeTest from '../../../utils/ThemeProviderTest'
import 'jest-styled-components'

import Label from '../Label'
import theme from '../../../theme'

describe('Label', () => {
  test('basic snapshot', () => {
    const label = renderer
      .create(
                <ThemeTest>
                    <Label styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(label).toMatchSnapshot()
  })

  test('should inherit the styling properties of the base variant', () => {
    const label = renderer
      .create(
                <ThemeTest>
                    <Label styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(label).toHaveStyleRule('color', theme.colors.text.default)
    expect(label).toHaveStyleRule('font-size', theme.fontSizes[4])
  })

  test('should apply custom styling properties', () => {
    const label = renderer
      .create(<Label styling="base" mt="20px" p="3px" />)
      .toJSON()
    expect(label).toHaveStyleRule('margin-top', '20px')
    expect(label).toHaveStyleRule('padding', '3px')
  })
})
