import React from 'react';

import Tab from './Tab';

export default props => {
  const {
    tabs,
    onClickTabItem,
    handleNewTab,
    onCloseTab,
    activeTab
  } = props;

  return (
    <div>
      {/* {tabs.length > 1 && ( */}
        <ol className='tab-list'>
          {tabs.map(child => {
            if (child) {
              const { label } = child;
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClickTabItem={() => onClickTabItem(label)}
                  onCloseTab={() => onCloseTab(label)}
                />
              );
            }
            return null;
          })}
          <li className='plus-tab' onClick={() => handleNewTab()}>
            +
          </li>
        </ol>
    </div>
  );
};
