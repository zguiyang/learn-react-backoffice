import React, { FC } from 'react';

import { Avatar, Button, Layout, Nav } from '@douyinfe/semi-ui';

import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons';

const LayoutHeader:FC<{}> = () => {
  const { Header } = Layout;
  return (
    <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        mode="horizontal"
        footer={
          <>
            <Button
              theme="borderless"
              icon={<IconBell size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
            />
            <Button
              theme="borderless"
              icon={<IconHelpCircle size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
            />
            <Avatar color="orange" size="small">
              YJ
            </Avatar>
          </>
        }
      ></Nav>
    </Header>
  )

}

export default LayoutHeader;
