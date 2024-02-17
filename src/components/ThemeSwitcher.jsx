import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import useDarkMode from '../hooks/useDarkMode';

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkMode] = useState(colorTheme === 'light');

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <button>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
      </button>
    </>
  );
}
