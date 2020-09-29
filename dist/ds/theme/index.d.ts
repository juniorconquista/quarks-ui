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
    colors: {
        dark: boolean;
        primary: {
            default: string;
            dark: string;
            light: string;
            contrast: string;
        };
        secondary: {
            default: string;
            dark: string;
            light: string;
            contrast: string;
        };
        danger: {
            default: string;
            dark: string;
            light: string;
            contrast: string;
        };
        success: {
            default: string;
            dark: string;
            light: string;
            contrast: string;
        };
        warning: {
            default: string;
            dark: string;
            light: string;
            contrast: string;
        };
        info: {
            default: string;
            dark: string;
            light: string;
            contrast: string;
        };
        grays: {
            default: string;
            dark: string;
            light: string;
            contrast: string;
        };
        background: {
            default: string;
            dark: string;
        };
        disabled: string;
        primaries: string[];
        whites: string[];
        blacks: string[];
        hovers: string[];
        readonly text: string;
    };
};
export default theme;
