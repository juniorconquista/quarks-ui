import {
    ColorProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    GridProps,
} from 'styled-system';

export type DefaultStyleProps = BorderProps &
    ColorProps &
    FlexboxProps &
    LayoutProps &
    PositionProps &
    SpaceProps &
    GridProps & {
        // for some reason this isn't included; this is for replacing the 'base' component
        // as?: React.ComponentType;
    };
