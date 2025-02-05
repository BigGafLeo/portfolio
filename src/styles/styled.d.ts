import 'styled-components';
import { palette, theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    breakpoints: typeof theme.breakpoints;
    shadows: typeof theme.shadows;
    borderRadiuses: typeof theme.borderRadiuses;
    palette: typeof palette;
    fonts: typeof theme.fonts;
    fontSizes: typeof theme.fontSizes;
    spacing: typeof theme.spacing;
    borderSize: typeof theme.borderSize;
  }
}
