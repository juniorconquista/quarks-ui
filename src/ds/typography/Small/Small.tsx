import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { SmallStyledProps } from './small.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.2',
        },
    },
} as VariantArgs);

export const Small: React.FC<SmallStyledProps> = styled.small`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default Small;
