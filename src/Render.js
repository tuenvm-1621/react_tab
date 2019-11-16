import React from 'react';

import { TabsConsumer } from './context';

export default({title}) => (
  <TabsConsumer>
    {props =>{
      debugger
      return props.map(children => children.label === title && (
      (children.component)
    ))}}
  </TabsConsumer>
)
