import { DefaultStyleProps, CssProperties } from '../../theme/types';
export declare type BoxStyledProps = DefaultStyleProps & CssProperties;
export interface BoxProps extends BoxStyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'row' | 'column' | 'grid' | 'overlay';
    css?: any;
}
