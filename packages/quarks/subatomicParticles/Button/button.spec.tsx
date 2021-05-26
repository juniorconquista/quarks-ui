import React, { ReactNode } from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from 'quarks/theme'
import 'jest-styled-components'
import Button from './button'

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

describe('Button component', () => {
  it('should inherit the styling properties of the primary variant', () => {
    const { sut } = makeSut(<Button styling="primary" />)
    expect(sut).toHaveStyleRule('background-color', theme.colors.primary.default)
    expect(sut).toHaveStyleRule('border-color', theme.colors.primary.default)
    expect(sut).toHaveStyleRule('color', theme.colors.primary.contrast)
  })

  it('should inherit the styling properties of the secondary variant', () => {
    const { sut } = makeSut(<Button styling="secondary" />)
    expect(sut).toHaveStyleRule('background-color', theme.colors.secondary.default)
    expect(sut).toHaveStyleRule('border-color', theme.colors.secondary.default)
    expect(sut).toHaveStyleRule('color', theme.colors.secondary.contrast)
  })

  it('should inherit the styling properties of the success variant', () => {
    const { sut } = makeSut(<Button styling="success" />)
    expect(sut).toHaveStyleRule('background-color', theme.colors.success.default)
    expect(sut).toHaveStyleRule('border-color', theme.colors.success.default)
    expect(sut).toHaveStyleRule('color', theme.colors.success.contrast)
  })

  it('should inherit the styling properties of the danger variant', () => {
    const { sut } = makeSut(<Button styling="danger" />)
    expect(sut).toHaveStyleRule('background-color', theme.colors.danger.default)
    expect(sut).toHaveStyleRule('border-color', theme.colors.danger.default)
    expect(sut).toHaveStyleRule('color', theme.colors.danger.contrast)
  })

  it('should inherit the styling properties of the warning variant', () => {
    const { sut } = makeSut(<Button styling="warning" />)
    expect(sut).toHaveStyleRule('background-color', theme.colors.warning.default)
    expect(sut).toHaveStyleRule('border-color', theme.colors.warning.default)
    expect(sut).toHaveStyleRule('color', theme.colors.warning.contrast)
  })

  it('should inherit the styling properties of the info variant', () => {
    const { sut } = makeSut(<Button styling="info" />)
    expect(sut).toHaveStyleRule('background-color', theme.colors.info.default)
    expect(sut).toHaveStyleRule('border-color', theme.colors.info.default)
    expect(sut).toHaveStyleRule('color', theme.colors.info.contrast)
  })

  it('should inherit the styling properties of the outline variant', () => {
    const { sut } = makeSut(<Button styling="info" outline />)
    expect(sut).toHaveStyleRule('background-color', 'transparent')
    expect(sut).toHaveStyleRule('color', theme.colors.info.default)
  })

  it('should inherit the styling properties of the link variant', () => {
    const { sut } = makeSut(<Button styling="link" />)
    expect(sut).toHaveStyleRule('color', theme.colors.primary.default)
    expect(sut).toHaveStyleRule('text-decoration', 'underline')
  })

  it('should inherit the styling properties of the small variant', () => {
    const { sut } = makeSut(<Button styling="primary" size="small" />)
    expect(sut).toHaveStyleRule('padding', '0.25rem 0.5rem')
    expect(sut).toHaveStyleRule('font-size', theme.fontSizes.sm)
    expect(sut).toHaveStyleRule('line-height', '1.5')
    expect(sut).toHaveStyleRule('border-radius', theme.radii.sm)
  })

  it('should inherit the styling properties of the large variant', () => {
    const { sut } = makeSut(<Button styling="primary" size="large" />)
    expect(sut).toHaveStyleRule('padding', '0.5rem 1rem')
    expect(sut).toHaveStyleRule('font-size', theme.fontSizes.lg)
    expect(sut).toHaveStyleRule('line-height', '1.5')
    expect(sut).toHaveStyleRule('border-radius', theme.radii.lg)
  })

  it('should inherit the styling properties of the block variant', () => {
    const { sut } = makeSut(<Button styling="primary" block />)
    expect(sut).toHaveStyleRule('width', '100%')
  })

  it('should inherit the styling properties of the text variant', () => {
    const { sut } = makeSut(<Button styling="primary" text />)
    expect(sut).toHaveStyleRule('background-color', 'transparent')
    expect(sut).toHaveStyleRule('border-color', 'transparent')
    expect(sut).toHaveStyleRule('color', theme.colors.primary.default)
  })

  it('should inherit the sapce properties variant', () => {
    const { sut } = makeSut(<Button styling="primary" marginX="15px" paddingX="10px" />)
    expect(sut).toHaveStyleRule('margin-left', '15px')
    expect(sut).toHaveStyleRule('margin-right', '15px')
    expect(sut).toHaveStyleRule('padding-left', '10px')
    expect(sut).toHaveStyleRule('padding-right', '10px')
  })

  it('should inherit the color properties variant', () => {
    const { sut } = makeSut(<Button styling="primary" color="#FFF" />)
    expect(sut).toHaveStyleRule('color', '#FFF')
  })

  it('should inherit the typography properties variant', () => {
    const { sut } = makeSut(<Button styling="primary" fontSize="2rem" />)
    expect(sut).toHaveStyleRule('font-size', '2rem')
  })

  it('should inherit the layout properties variant', () => {
    const { sut } = makeSut(<Button styling="primary" width={256} height={60} />)
    expect(sut).toHaveStyleRule('width', '256px')
    expect(sut).toHaveStyleRule('height', '60px')
  })

  it('should inherit the border properties variant', () => {
    const { sut } = makeSut(<Button styling="primary" borderTop='1px solid' borderWidth='4px' borderStyle='dotted' borderColor='blue' />)
    expect(sut).toHaveStyleRule('border-top', '1px solid')
    expect(sut).toHaveStyleRule('border-width', '4px')
    expect(sut).toHaveStyleRule('border-style', 'dotted')
    expect(sut).toHaveStyleRule('border-color', 'blue')
  })

  it('should inherit the position properties variant', () => {
    const { sut } = makeSut(<Button styling="primary" position='absolute' zIndex={2} top="0" right="0" />)
    expect(sut).toHaveStyleRule('position', 'absolute')
    expect(sut).toHaveStyleRule('z-index', '2')
    expect(sut).toHaveStyleRule('top', '0')
    expect(sut).toHaveStyleRule('right', '0')
  })
})
