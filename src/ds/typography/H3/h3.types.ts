import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H3StyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base' | 'light';
    };

export interface H3Props {}
