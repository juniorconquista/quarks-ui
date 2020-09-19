import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { H4StyledProps } from './h4.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.4',
        },
        get light() {
            return {
                ...this.base,
                fontWeight: 'normal',
            };
        },
    },
} as VariantArgs);

export const H4: React.FC<H4StyledProps> = styled.h4`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H4;
