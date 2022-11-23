import React from 'react';

import { Outlet } from "react-router-dom";

import BasicLayout from './layouts/BasicLayout';

const  App:React.FC = ( ) => {
  return (
    <div className="app-provider">
      <BasicLayout>
        <Outlet></Outlet>
      </BasicLayout>
    </div>
  )
}

export default App
