import { useEffect, useState } from 'react';
import { MainRouter } from './navigation';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-lightModeColor dark:bg-darkModeColor text-black dark:text-white p-4 h-screen w-screen mx-auto ">
        <button onClick={toggleDarkMode} className="hover:underline">
          {darkMode ? 'Light theme' : 'Dark theme'}
        </button>
        <MainRouter />
      </div>
    </div>
  );
}

export default App;
