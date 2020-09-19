import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { PStyledProps } from './p.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.4',
        },
    },
} as VariantArgs);

export const P: PStyledProps = styled.p`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default P;
