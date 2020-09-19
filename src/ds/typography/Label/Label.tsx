import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { LabelStyledProps } from './label.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.4',
        },
    },
} as VariantArgs);

export const Label: LabelStyledProps = styled.label`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default Label;
