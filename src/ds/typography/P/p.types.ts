import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type PStyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base';
    };

export interface PProps {}
