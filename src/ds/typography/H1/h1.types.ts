import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H1StyledProps = DefaultStyleProps & TypographyProps;

export interface H1Props extends H1StyledProps {
    /** The description for myProp */
    styling: 'base' | 'light';
}
