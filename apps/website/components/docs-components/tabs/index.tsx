import React, { useState } from 'react';
export const Tabs = ({ children }) => {
  // Extract tab names from children
  const tabNames = React.Children.map(children, (child) => {
    return child.props.label;
  });
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs-container my-4">
      <div className="flex border-b border-typography-100">
        {tabNames.map((name, index) => (
          <button
            key={index}
            className={`py-2 px-4 font-bold text-lg ${
              activeTab === index
                ? 'text-typography-950 border-b-2 border-typography-950'
                : 'text-typography-400'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="py-4">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};
export const TabItem = ({ children, label }) => {
  return <div>{children}</div>;
};