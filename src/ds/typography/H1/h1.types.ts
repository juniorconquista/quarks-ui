import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H1StyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base' | 'light';
    };

export interface H1Props {}
