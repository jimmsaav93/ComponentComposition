import React, { useState } from 'react';

const Container = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ backgroundColor: 'white', border: '1px solid red', padding: '10px' }}>
      <h2 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
        {title}
      </h2>
      {!isCollapsed && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Container;