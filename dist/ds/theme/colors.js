'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = {
    dark: false,
    primary: {
        default: '#F26522',
        dark: '#d14b0c',
        light: '#f69263',
        contrast: '#ffffff',
    },
    secondary: {
        default: '#372E2A',
        dark: '#2c2522',
        light: '#453935',
        contrast: '#1B2B3A',
    },
    danger: {
        default: '#ff6961',
        dark: '#ff261b',
        light: '#ffbdb9',
        contrast: '#ffffff',
    },
    success: {
        default: '#0E9d51',
        dark: '#0a753c',
        light: '#10bc60',
        contrast: '#ffffff',
    },
    warning: {
        default: '#ffb143',
        dark: '#e4902c',
        light: '#ffd868',
        contrast: '#ffffff',
    },
    info: {
        default: '#0ea7a7',
        dark: '#0a7676',
        light: '#11d4d4',
        contrast: '#ffffff',
    },
    grays: {
        default: '#9ba8b2',
        dark: '#4b4b4b',
        light: '#eeeeef',
        contrast: '#f5f5f5',
    },
    background: {
        default: '#ffffff',
        dark: '#F26522',
    },
    disabled: '#9398a6',
    primaries: ['#d7edf4'],
    whites: ['#eeeeef', '#f2fbfe'],
    blacks: ['#35363a'],
    hovers: ['#f5f7f7'],
    get text() {
        return this.dark ? '#FFFFFF' : '#1B2b3a';
    },
};
//# sourceMappingURL=colors.js.map
