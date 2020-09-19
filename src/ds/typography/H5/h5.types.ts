import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H5StyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base' | 'light';
    };

export interface H5Props {}
