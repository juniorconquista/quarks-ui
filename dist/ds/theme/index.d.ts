import colors from './colors';
declare const theme: {
    fontSizes: string[];
    space: {
        none: string;
        xxxs: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    breakpoints: string[];
    radii: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: typeof colors;
};
export default theme;
