import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs2 = [
  { title: '主页', sub: '1' },
  { title: '订单', sub: '2' },
  { title: '我', sub: '3' },
];

const Footer = () => (
  <div style={{position:'fixed',left:0,bottom:0}}>
    <Tabs tabs={tabs2}
      initialPage={1}
      tabBarPosition="bottom"
      renderTab={tab => <span>{tab.title}</span>}
    >
      { this.props.children }
    </Tabs>
    <WhiteSpace />
  </div>
);

export default Footer;
