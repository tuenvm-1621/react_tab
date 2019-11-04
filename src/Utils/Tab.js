import React from 'react';

export default props => {
  const { activeTab, label, onClickTabItem, onCloseTab } = props;
  return (
    <li
      className={`tab-list-item ${activeTab === label && 'tab-list-active'}`}
      onClick={() => onClickTabItem(label)}
      onMouseDown={e => {
        e.button === 1 && onCloseTab(label);
      }}
    >
      {label}
      <div
        className='close-tab'
        onClick={event => {
          event.stopPropagation();
          onCloseTab(label);
        }}
      >
        x
      </div>
    </li>
  );
};
