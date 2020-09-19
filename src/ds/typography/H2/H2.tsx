import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { H2StyledProps } from './h2.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.6',
        },
        get light() {
            return {
                ...this.base,
                fontWeight: 'normal',
            };
        },
    },
} as VariantArgs);

export const H2: H2StyledProps = styled.h2`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H2;
