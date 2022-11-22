import React, { FC } from 'react';

import { Layout, Nav }  from '@douyinfe/semi-ui';

import { IconHistogram, IconHome, IconLive, IconSetting } from '@douyinfe/semi-icons';

const LayoutSider:FC<{}> = ( ) => {

  const { Sider } = Layout;

  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        defaultSelectedKeys={['Home']}
        style={{ maxWidth: 220, height: '100%' }}
        items={[
          { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
          { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
          { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
          { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
        ]}
        header={{
          logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
          text: 'Learn React',
        }}
        footer={{
          collapseButton: true,
        }}
      />
    </Sider>
  );

};


export default LayoutSider;
