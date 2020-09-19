import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type SpanStyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base';
    };

export interface SpanProps {}
