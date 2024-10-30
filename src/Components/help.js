import React, { useState } from 'react';

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {showComponent ? 'Hide Component' : 'Show Component'}
      </button>
      {showComponent && <MyComponent />}
    </div>
  );
}

function MyComponent() {
  return (
    <div>
      <h2>This is the loaded component!</h2>
    </div>
  );
}

export default App;