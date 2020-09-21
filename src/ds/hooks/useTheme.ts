import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useTheme = () => {
    return useContext(ThemeContext);
};
