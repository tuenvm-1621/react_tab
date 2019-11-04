import React, { useState } from 'react';
import { render } from 'react-dom';

import Tabs from './Utils/Tabs';
import NewTab from './NewTab';

import './css/Tab.css';
const container = document.createElement('div');

document.body.appendChild(container);
const Home = () => {
  const [tabs, setTabs] = useState([{ label: 0 }]);
  const [tabName, setTabName] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const currentIndex = tabs.findIndex(tab => tab.label === activeTab);
  const onClickTabItem = tab => {
    setActiveTab(tab);
  };
  const handleNewTab = () => {
    debugger;
    setTabName(tabName + 1);
    setTabs([...tabs, { label: tabName }]);
    setActiveTab(tabName);
  };

  const onCloseTab = closeTab => {
    setTabs(tabs.filter(tab => tab.label !== closeTab));
    if (closeTab === activeTab) {
      if (currentIndex === 0) {
        tabs.length > 1 && setActiveTab(tabs[currentIndex + 1].label);
      } else {
        setActiveTab(tabs[currentIndex - 1].label);
      }
    }
  };
  return (
    <Tabs
      {...{
        tabs,
        setTabs,
        tabName,
        setTabName,
        handleNewTab,
        onCloseTab,
        onClickTabItem,
        activeTab
      }}
    >
      {tabs.length !== 0 &&
        tabs.map(child => (
          <div key={child.label} label={child.label}>
            {render(
              <NewTab handleNewTab={handleNewTab} label={activeTab} />,
              container
            )}
          </div>
        ))}
    </Tabs>
  );
};

export default Home;
