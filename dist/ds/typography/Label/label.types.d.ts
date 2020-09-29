import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';
export declare type LabelStyledProps = DefaultStyleProps & TypographyProps;
export interface LabelProps extends LabelStyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base';
}
