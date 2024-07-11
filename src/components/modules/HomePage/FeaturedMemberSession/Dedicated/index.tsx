import React from 'react'
import { Tabs } from './slider';

const fakeTabs = [
    {
      title: "Tab 1",
      value: "tab1",
      content: <div>Content for Tab 1</div>,
    },
    {
      title: "Tab 2",
      value: "tab2",
      content: <div>Content for Tab 2</div>,
    },
    {
      title: "Tab 3",
      value: "tab3",
      content: <div>Content for Tab 3</div>,
    },
    {
      title: "Tab 4",
      value: "tab4",
      content: <div>Content for Tab 4</div>,
    }
  ];

  
function Dedicated() {
  return (
    <div className='w-full mx-auto'>
         <Tabs tabs={fakeTabs}/> 
    </div>
 
  )
}

export default Dedicated