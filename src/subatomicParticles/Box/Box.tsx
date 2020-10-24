import { SFC } from 'react';
import styled from 'styled-components';
import {
    variant,
    VariantArgs,
    color,
    typography,
    fontSize,
    position,
    space,
    flexbox,
    grid,
    layout,
    border,
    system,
} from 'styled-system';
import { BoxProps } from './box.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '&:focus': {
                outline: 'none',
            },
        },
        get row() {
            return {
                ...this.base,
                flexDirection: 'row',
            };
        },
        get column() {
            return {
                ...this.base,
                flexDirection: 'column',
            };
        },
        get grid() {
            return {
                ...this.base,
                display: 'grid',
                alignItems: 'start',
            };
        },
        overlay: {
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 9999,
        },
    },
} as VariantArgs);

export const Box: SFC<BoxProps> = styled.div<BoxProps>`
    ${variants}
    ${color}
    ${typography}
    ${fontSize}
    ${space}
    ${position}
    ${flexbox}
    ${grid}
    ${layout}
    ${border}
    ${system({ transition: true, animationFillMode: true })}
    ${(props) => props.css ?? ''}
`;

export default Box;
