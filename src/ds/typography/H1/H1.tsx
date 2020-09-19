import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { H1StyledProps } from './h1.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            fontFamily: 'OpenSans Semibold',
            color: 'secondary.default',
            textAlign: 'left',
            fontSize: '40px',
            lineHeight: '54px',
        },
        get light() {
            return {
                ...this.base,
                fontFamily: 'OpenSans Light',
            };
        },
        get error() {
            return {
                ...this.base,
                color: 'danger.primary',
            };
        },
        get baseLight() {
            return {
                ...this.base,
                fontFamily: 'OpenSans Regular',
            };
        },
    },
} as VariantArgs);

export const H1: H1StyledProps = styled.h1`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H1;
