import React from 'react'
import renderer from 'react-test-renderer'
import ThemeTest from '../../../utils/ThemeProviderTest'
import 'jest-styled-components'

import SPan from '../SPan'
import theme from '../../../theme'

describe('SPan', () => {
  test('basic snapshot', () => {
    const span = renderer
      .create(
                <ThemeTest>
                    <SPan styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(span).toMatchSnapshot()
  })

  test('should inherit the styling properties of the base variant', () => {
    const span = renderer
      .create(
                <ThemeTest>
                    <SPan styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(span).toHaveStyleRule('color', theme.colors.text.default)
    expect(span).toHaveStyleRule('font-size', theme.fontSizes[4])
  })

  test('should apply custom styling properties', () => {
    const span = renderer
      .create(<SPan styling="base" mt="20px" p="3px" />)
      .toJSON()
    expect(span).toHaveStyleRule('margin-top', '20px')
    expect(span).toHaveStyleRule('padding', '3px')
  })
})
