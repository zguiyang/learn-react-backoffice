import React from 'react';

import { Layout } from '@douyinfe/semi-ui';

import LayoutSider from './modules/Sider';

import LayoutHeader from './modules/Header';

import LayoutContent from './modules/Content';

import LayoutFooter from './modules/Footer';

const BasicLayout:React.FC<React.PropsWithChildren<{}>> =  ( { children }) => {
	return (
		<Layout className='app-basic-layout-container' style={{ border: '1px solid var(--semi-color-border)' }}>
      <LayoutSider />
			<Layout className='app-basic-layout-right-container'>
        <LayoutHeader/>
        <LayoutContent>
          { children }
        </LayoutContent>
        <LayoutFooter></LayoutFooter>
			</Layout>
		</Layout>
	);
};


export default BasicLayout;
