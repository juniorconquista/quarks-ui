import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { PProps } from './p.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 4,
        },
    },
} as VariantArgs);

export const P: React.FC<PProps> = styled.p`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default P;
