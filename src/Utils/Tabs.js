import React from 'react';

import Tab from './Tab';

export default props => {
  const {
    children,
    onClickTabItem,
    handleNewTab,
    onCloseTab,
    activeTab
  } = props;

  return (
    <div>
      {children.length > 1 && (
        <ol className='tab-list'>
          {children.map(child => {
            if (child) {
              const { label } = child.props;
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
      )}
      <div className='tab-content'>
        {children.map(child => {
          if (!child || child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};
