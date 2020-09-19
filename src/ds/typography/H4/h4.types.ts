import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H4StyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base' | 'light';
    };

export interface H4Props {}
