const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('elliot-theme-v3');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';

    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}