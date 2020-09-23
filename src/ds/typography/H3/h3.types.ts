import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H3StyledProps = DefaultStyleProps & TypographyProps;

export interface H3Props extends H3StyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base' | 'light';
}
