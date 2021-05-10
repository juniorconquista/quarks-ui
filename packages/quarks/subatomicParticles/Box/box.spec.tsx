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
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'column')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should inherit the styling properties of the row variant', () => {
    const { sut } = makeSut(<Box styling="row" />)
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should inherit the styling properties of the column variant', () => {
    const { sut } = makeSut(<Box styling="column" />)
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'column')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should inherit the styling properties of the grid variant', () => {
    const { sut } = makeSut(<Box styling="grid" />)
    expect(sut).toHaveStyleRule('display', 'grid')
    expect(sut).toHaveStyleRule('flex-direction', 'column')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'start')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should inherit the styling properties of the overlay variant', () => {
    const { sut } = makeSut(<Box styling="overlay" />)
    expect(sut).toHaveStyleRule('position', 'fixed')
    expect(sut).toHaveStyleRule('left', '0')
    expect(sut).toHaveStyleRule('right', '0')
    expect(sut).toHaveStyleRule('top', '0')
    expect(sut).toHaveStyleRule('bottom', '0')
    expect(sut).toHaveStyleRule('z-index', '9999')
  })

  it('should apply custom border styling properties', () => {
    const { sut } = makeSut(<Box styling="row" border="1px solid" />)
    expect(sut).toHaveStyleRule('border', '1px solid')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should apply custom color styling properties', () => {
    const { sut } = makeSut(
      <Box
        styling="row"
        border="1px solid"
        color={theme.colors.primary}
      />
    )
    expect(sut).toHaveStyleRule('color', theme.colors.primary.default)
    expect(sut).toHaveStyleRule('border', '1px solid')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should apply custom layout styling properties', () => {
    const { sut } = makeSut(<Box styling="row" border="1px solid" width={1 / 2} />)
    expect(sut).toHaveStyleRule('width', '50%')
    expect(sut).toHaveStyleRule('border', '1px solid')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should apply custom position styling properties', () => {
    const { sut } = makeSut(<Box styling="row" position="absolute" />)
    expect(sut).toHaveStyleRule('position', 'absolute')
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should apply custom position styling properties', () => {
    const { sut } = makeSut(<Box styling="row" m="xxs" />)
    expect(sut).toHaveStyleRule('margin', theme.space.xxs)
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'row')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })

  it('should apply custom typography styling properties', () => {
    const { sut } = makeSut(<Box styling="base" fontSize={8} />)
    expect(sut).toHaveStyleRule('font-size', theme.fontSizes[8])
    expect(sut).toHaveStyleRule('display', 'flex')
    expect(sut).toHaveStyleRule('flex-direction', 'column')
    expect(sut).toHaveStyleRule('justify-content', 'center')
    expect(sut).toHaveStyleRule('align-items', 'center')
    expect(sut).toHaveStyleRule('outline', 'none', {
      modifier: '&:focus'
    })
  })
})
