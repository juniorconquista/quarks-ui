import React from 'react'
import renderer from 'react-test-renderer'
import ThemeTest from '../../../utils/ThemeProviderTest'
import 'jest-styled-components'

import H6 from '../H6'
import theme from '../../../theme'

describe('H6', () => {
  test('basic snapshot', () => {
    const h6 = renderer
      .create(
                <ThemeTest>
                    <H6 styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(h6).toMatchSnapshot()
  })

  test('should inherit the styling properties of the base variant', () => {
    const h6 = renderer
      .create(
                <ThemeTest>
                    <H6 styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(h6).toHaveStyleRule('color', theme.colors.text.default)
    expect(h6).toHaveStyleRule('font-size', theme.fontSizes[1])
  })

  test('should inherit the styling properties of the light variant', () => {
    const h6 = renderer
      .create(
                <ThemeTest>
                    <H6 styling="light" />
                </ThemeTest>
      )
      .toJSON()
    expect(h6).toHaveStyleRule('color', theme.colors.text.default)
    expect(h6).toHaveStyleRule('font-size', theme.fontSizes[1])
    expect(h6).toHaveStyleRule('font-weight', 'normal')
  })

  test('should apply custom styling properties', () => {
    const h6 = renderer
      .create(<H6 styling="base" mt="20px" p="3px" />)
      .toJSON()
    expect(h6).toHaveStyleRule('margin-top', '20px')
    expect(h6).toHaveStyleRule('padding', '3px')
  })
})
