import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { H5StyledProps } from './h5.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.2',
        },
        get light() {
            return {
                ...this.base,
                fontWeight: 'normal',
            };
        },
    },
} as VariantArgs);

export const H5: React.FC<H5StyledProps> = styled.h5`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H5;
