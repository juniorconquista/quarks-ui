import { DefaultStyleProps } from '../../theme/types';
import { TypographyProps } from 'styled-system';

export type SmallStyledProps = DefaultStyleProps & TypographyProps;

export interface SmallProps extends SmallStyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base';
}
