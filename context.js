import React from "react";
const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
      dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
}
const staticThemeContext = React.createContext("light");
const dynamicThemeContext = React.createContext(themes.dark);

export {
    staticThemeContext,
    dynamicThemeContext,
    themes
};