import React from 'react'
import renderer from 'react-test-renderer'
import ThemeTest from '../../../utils/ThemeProviderTest'
import 'jest-styled-components'

import H4 from '../H4'
import theme from '../../../theme'

describe('H4', () => {
  test('basic snapshot', () => {
    const h4 = renderer
      .create(
                <ThemeTest>
                    <H4 styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(h4).toMatchSnapshot()
  })

  test('should inherit the styling properties of the base variant', () => {
    const h4 = renderer
      .create(
                <ThemeTest>
                    <H4 styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(h4).toHaveStyleRule('color', theme.colors.text.default)
    expect(h4).toHaveStyleRule('font-size', theme.fontSizes[4])
  })

  test('should inherit the styling properties of the light variant', () => {
    const h4 = renderer
      .create(
                <ThemeTest>
                    <H4 styling="light" />
                </ThemeTest>
      )
      .toJSON()
    expect(h4).toHaveStyleRule('color', theme.colors.text.default)
    expect(h4).toHaveStyleRule('font-size', theme.fontSizes[4])
    expect(h4).toHaveStyleRule('font-weight', 'normal')
  })

  test('should apply custom styling properties', () => {
    const h4 = renderer
      .create(<H4 styling="base" mt="20px" p="3px" />)
      .toJSON()
    expect(h4).toHaveStyleRule('margin-top', '20px')
    expect(h4).toHaveStyleRule('padding', '3px')
  })
})
