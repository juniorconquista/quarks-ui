import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H6StyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base' | 'light';
    };

export interface H6Props {}
