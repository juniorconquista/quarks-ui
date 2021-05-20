import React, { ReactNode } from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from 'quarks/theme'
import 'jest-styled-components'
import H5 from './h5'

type SutTypes = {
  sut: string
}

const makeSut = (component: ReactNode): SutTypes => {
  const sut = renderer.create(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  ).toJSON()

  return { sut }
}

describe('H5 component', () => {
  it('should inherit the styling properties of the base variant', () => {
    const { sut } = makeSut(<H5 styling="base" />)
    expect(sut).toHaveStyleRule('color', theme.colors.text.default)
    expect(sut).toHaveStyleRule('font-size', theme.fontSizes.h5)
  })

  it('should inherit the styling properties of the light variant', () => {
    const { sut } = makeSut(<H5 styling="light" />)
    expect(sut).toHaveStyleRule('color', theme.colors.text.default)
    expect(sut).toHaveStyleRule('font-size', theme.fontSizes.h5)
    expect(sut).toHaveStyleRule('font-weight', '400')
  })

  it('should apply custom styling properties', () => {
    const { sut } = makeSut(<H5 styling="base" mt="20px" p="3px" />)
    expect(sut).toHaveStyleRule('margin-top', '20px')
    expect(sut).toHaveStyleRule('padding', '3px')
  })
})
