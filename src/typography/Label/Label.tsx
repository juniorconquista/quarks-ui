import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { LabelProps } from './label.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text.default',
            fontSize: 4,
        },
    },
} as VariantArgs);

export const Label: React.FC<LabelProps> = styled.label`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default Label;
