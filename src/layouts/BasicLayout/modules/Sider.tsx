import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { Layout, Nav }  from '@douyinfe/semi-ui';

import { IconHistogram, IconHome, IconLive, IconSetting } from '@douyinfe/semi-icons';

const LayoutSider:FC<{}> = ( ) => {

  const { Sider } = Layout;

  const renderSiderMenu = ( { itemElement, isSubNav, props }:any ) => {
    if ( !isSubNav ) {
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={props.itemKey}
        >
          {itemElement}
        </Link>
      );
    }
    return (
      <span>
         {itemElement}
      </span>
    )
  };

  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        defaultSelectedKeys={['/']}
        style={{ maxWidth: 220, height: '100%' }}
        renderWrapper={renderSiderMenu}
        items={[
          { itemKey: '/', text: '首页', icon: <IconHome size="large" /> },
          { itemKey: '/dashboard', text: 'Dashboard', icon: <IconHistogram size="large" />,
            items: [
              {
                itemKey: '/dashboard/workspace',
                text: '工作空间'
              }
            ] },
          { itemKey: '/authors', text: '作者中心', icon: <IconLive size="large" /> },
          { itemKey: '/bookRack', text: '书架管理', icon: <IconSetting size="large" /> },
          { itemKey: '/user', text: '用户中心', icon: <IconSetting size="large" /> },
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
