import React from 'react'
import renderer from 'react-test-renderer'
import ThemeTest from '../../../utils/ThemeProviderTest'
import 'jest-styled-components'

import H2 from '../H2'
import theme from '../../../theme'

describe('H2', () => {
  test('basic snapshot', () => {
    const h2 = renderer
      .create(
                <ThemeTest>
                    <H2 styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(h2).toMatchSnapshot()
  })

  test('should inherit the styling properties of the base variant', () => {
    const h2 = renderer
      .create(
                <ThemeTest>
                    <H2 styling="base" />
                </ThemeTest>
      )
      .toJSON()
    expect(h2).toHaveStyleRule('color', theme.colors.text.default)
    expect(h2).toHaveStyleRule('font-size', theme.fontSizes[6])
  })

  test('should inherit the styling properties of the light variant', () => {
    const h2 = renderer
      .create(
                <ThemeTest>
                    <H2 styling="light" />
                </ThemeTest>
      )
      .toJSON()
    expect(h2).toHaveStyleRule('color', theme.colors.text.default)
    expect(h2).toHaveStyleRule('font-size', theme.fontSizes[6])
    expect(h2).toHaveStyleRule('font-weight', 'normal')
  })

  test('should apply custom styling properties', () => {
    const h2 = renderer
      .create(<H2 styling="base" mt="20px" p="3px" />)
      .toJSON()
    expect(h2).toHaveStyleRule('margin-top', '20px')
    expect(h2).toHaveStyleRule('padding', '3px')
  })
})
