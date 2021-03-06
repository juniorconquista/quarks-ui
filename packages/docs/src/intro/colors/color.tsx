import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { Box, H1, H4, P, colors as colorsTheme } from '@packages/quarks'

interface Props {
  styling: string
  colorLight?: string
  colorDark?: string
}

const color: React.FC<Props> = (props: Props): JSX.Element => {
  const colors = colorsTheme(useDarkMode())
  return (
        <Box styling="column">
            <Box
                styling="column"
                width="100%"
                height="200px"
                padding="10px"
                alignItems="flex-start"
                justifyContent="space-between"
                boxSizing="border-box"
                backgroundColor={`${props.styling}.light`}

            >
                <H4
                    styling="base"
                    m="0px"
                    color={props.colorLight ?? '#FFF'}
                    textAlign="right"
                    width="100%"
                    textTransform="uppercase"
                    fontSize='.8rem'
                    letterSpacing="1px"
                >
                    {props.styling}
                </H4>
                <Box styling="column" alignItems="flex-start">
                    <P
                        styling="base"
                        m="0px"
                        color={props.colorLight ?? '#FFF'}
                        textAlign="left"
                    >
                        HEX {colors[props.styling].light}
                    </P>
                    <H1
                        styling="base"
                        m="0px"
                        color={props.colorLight ?? '#FFF'}
                    >
                        Light
                    </H1>
                </Box>
            </Box>
            <Box
                styling="base"
                width="100%"
                boxSizing="border-box"
                height="60px"
                color="#FFF"
                padding="10px"
                alignItems="flex-start"
                justifyContent="flex-end"
                backgroundColor={`${props.styling}.dark`}
            >
                <P
                    styling="base"
                    m="0px"
                    color={props.colorDark ?? '#FFF'}
                    fontSize='.7rem'
                >
                    HEX {colors[props.styling].light}
                </P>
                <H4
                    styling="base"
                    m="0px"
                    color={props.colorDark ?? '#FFF'}
                    fontSize='base'
                >
                    Dark
                </H4>
            </Box>
        </Box>
  )
}

export default color
