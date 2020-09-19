import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type SmallStyledProps = DefaultStyleProps &
    TypographyProps & {
        styling: 'base';
    };

export interface SmallProps {}
