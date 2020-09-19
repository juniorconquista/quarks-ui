import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { H6StyledProps } from './h6.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.1',
        },
        get light() {
            return {
                ...this.base,
                fontWeight: 'normal',
            };
        },
    },
} as VariantArgs);

export const H6: React.FC<H6StyledProps> = styled.h6`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H6;
