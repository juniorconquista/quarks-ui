import {
    ColorProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    GridProps,
} from 'styled-system';
export declare type CssProperties = {
    transition?: string;
    filter?: string;
    textTransform?:
        | 'none'
        | 'capitalize'
        | 'uppercase'
        | 'lowercase'
        | 'initial'
        | 'inherit';
    animationFillMode?:
        | 'none'
        | 'forwards'
        | 'backwards'
        | 'both'
        | 'initial'
        | 'inherit';
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    whiteSpace?:
        | 'none'
        | 'nowrap'
        | 'pre'
        | 'pre-line'
        | 'pre-wrap'
        | 'initial'
        | 'inherit';
    '-webkit-box-shadow'?: string;
};
export declare type DefaultStyleProps = BorderProps &
    ColorProps &
    FlexboxProps &
    LayoutProps &
    PositionProps &
    SpaceProps &
    GridProps & {};
