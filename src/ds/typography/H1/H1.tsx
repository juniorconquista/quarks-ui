import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { H1StyledProps } from './h1.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 8,
        },
        get light() {
            return {
                ...this.base,
                fontWeight: 'normal',
            };
        },
    },
} as VariantArgs);

export const H1: React.FC<H1StyledProps> = styled.h1`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H1;
