import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { SpanStyledProps } from './span.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 'fontSizes.4',
        },
    },
} as VariantArgs);

export const Span: SpanStyledProps = styled.span`
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default Span;
