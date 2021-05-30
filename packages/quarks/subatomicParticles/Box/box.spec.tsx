import React, { ReactNode } from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from 'quarks/theme'
import 'jest-styled-components'
import Box from './box'

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

describe('Box component', () => {
  it('should inherit the styling properties of the base variant', () => {
    const { sut } = makeSut(<Box styling="base" />)
    expect(sut).toHaveStyleRule('display', 'block')
  })

  it('should inherit the styling properties of the row variant', () => {
    const { sut } = makeSut(<Box styling="row" />)
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('flex-wrap', 'wrap')
    expect(sut).toHaveStyleRule('justify-content', 'center')
  })

  it('should inherit the styling properties of the column variant', () => {
    const { sut } = makeSut(<Box styling="column" />)
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'column')
    expect(sut).toHaveStyleRule('flex-wrap', 'wrap')
    expect(sut).toHaveStyleRule('justify-content', 'center')
  })

  it('should inherit the styling properties of the grid variant', () => {
    const { sut } = makeSut(<Box styling="grid" />)
    expect(sut).toHaveStyleRule('align-items', 'start')
    expect(sut).toHaveStyleRule('display', 'grid')
    expect(sut).toHaveStyleRule('gap', '10px')
  })

  it('should apply custom border styling properties', () => {
    const { sut } = makeSut(<Box styling="row" border="1px solid" />)
    expect(sut).toHaveStyleRule('border', '1px solid')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
  })

  it('should apply custom color styling properties', () => {
    const { sut } = makeSut(
      <Box
        styling="row"
        border="1px solid"
        color={theme.colors.primary.default}
      />
    )
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('border', '1px solid')
    expect(sut).toHaveStyleRule('color', theme.colors.primary.default)
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('flex-wrap', 'wrap')
    expect(sut).toHaveStyleRule('justify-content', 'center')
  })

  it('should apply custom layout styling properties', () => {
    const { sut } = makeSut(<Box styling="row" border="1px solid" width={1 / 2} />)
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('border', '1px solid')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('flex-wrap', 'wrap')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('width', '50%')
  })

  it('should apply custom position styling properties', () => {
    const { sut } = makeSut(<Box styling="row" position="absolute" />)
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('flex-wrap', 'wrap')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('position', 'absolute')
  })

  it('should apply custom position styling properties', () => {
    const { sut } = makeSut(<Box styling="row" m="xs" />)
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('flex-wrap', 'wrap')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('margin', theme.space.xs)
  })

  it('should apply custom typography styling properties', () => {
    const { sut } = makeSut(<Box styling="base" fontSize='lg' />)
    expect(sut).toHaveStyleRule('display', 'block')
    expect(sut).toHaveStyleRule('font-size', theme.fontSizes.lg)
  })

  it('should apply custom styling with css properties', () => {
    const { sut } = makeSut(<Box styling="base" css={{ background: 'red' }} />)
    expect(sut).toHaveStyleRule('display', 'block')
    expect(sut).toHaveStyleRule('background', 'red')
  })
})
