import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';
export declare type PStyledProps = DefaultStyleProps & TypographyProps;
export interface PProps extends PStyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base';
}
