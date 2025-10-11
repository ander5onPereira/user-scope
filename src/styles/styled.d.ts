import 'styled-components';
import { theme } from './theme';

// Cria o tipo baseado no seu objeto theme
type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
