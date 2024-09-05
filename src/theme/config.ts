export const themes = ['system', 'light', 'dark'];
export const defaultTheme = 'system';

export function getTheme(theme: string) {
  return themes.includes(theme) ? theme : defaultTheme;
}
