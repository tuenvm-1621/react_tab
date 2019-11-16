import React, { useState } from 'react';
import { render } from 'react-dom'

import Tabs from './Utils/Tabs';
import NewTab from './NewTab';

import './css/Tab.css';
let container = [{label: 0, document: document.createElement(`div${0}`)}];

document.body.appendChild(container[0].document);
document.body.getElementsByTagName(`div0`)[0].style.display = 'none'

const Home = () => {
  const [tabs, setTabs] = useState([{ label: 0, component: <NewTab label={0} /> }]);
  const [tabName, setTabName] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const currentIndex = tabs.findIndex(tab => tab.label === activeTab);
  const onClickTabItem = tab => {
    document.body.getElementsByTagName(`div${activeTab}`)[0].style.display = 'none'
    setActiveTab(tab);
    document.body.getElementsByTagName(`div${activeTab}`)[0].style.display = 'none'
  };
  const handleNewTab = () => {
    document.body.getElementsByTagName(`div${activeTab}`)[0].style.display = 'none'
    setTabName(tabName + 1);
    setTabs([...tabs, { label: tabName, component: <NewTab label={tabName} /> }]);
    setActiveTab(tabName);
    container = [...container, {label: tabName, document: document.createElement(`div${tabName}`)}]
    document.body.appendChild(container.slice(-1)[0].document)
    document.body.getElementsByTagName(`div${tabName}`)[0].style.display = 'none'
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

  const currentDocument = container.filter(child => child.label === activeTab)[0]
  document.body.getElementsByTagName(`div${activeTab}`)[0].style.display = '';
  console.log(currentDocument)
  const currentTab = tabs.filter(child => child.label === activeTab)[0]

  return (
    <div>
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
      />
      {/* {tabs.map(child => child.label === activeTab && render(
        <div key={child.label} label={child.label}>
          {child.component}
        </div>, currentDocument.document
      ))} */}
      {render(currentTab.component, currentDocument.document)}
    </div>
  );
};

export default Home;
