import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';
export declare type H2StyledProps = DefaultStyleProps & TypographyProps;
export interface H2Props extends H2StyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base' | 'light';
}
