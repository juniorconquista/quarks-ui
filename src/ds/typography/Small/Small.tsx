import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { SmallProps } from './small.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text.default',
            fontSize: 2,
        },
    },
} as VariantArgs);

export const Small: React.FC<SmallProps> = styled.small`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default Small;
