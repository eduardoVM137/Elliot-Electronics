const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('elliot-theme-v2');
    var theme = stored || 'light';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.classList.add('light');
    document.documentElement.style.colorScheme = 'light';
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
