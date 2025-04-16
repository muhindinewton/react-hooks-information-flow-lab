import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"; // import new component
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header 
        onDarkModeClick={handleDarkModeClick} 
        isDarkMode={isDarkMode}
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
