import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type H2StyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base' | 'light';
    };

export interface H2Props {}
