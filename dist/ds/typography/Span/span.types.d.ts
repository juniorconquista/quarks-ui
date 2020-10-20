import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';
export declare type SpanStyledProps = DefaultStyleProps & TypographyProps;
export interface SpanProps extends SpanStyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base';
}
