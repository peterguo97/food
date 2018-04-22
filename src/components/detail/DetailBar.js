import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React from 'react';
import DetailBar_Left from './DetailBar_Left';
const tabs2 = [
    { title: '商品', sub: '1' },
    { title: '评价', sub: '2' },
    { title: '商家', sub: '3' },
];

export default class DetailBar extends React.Component {
    render(){
        return(
            <div style={{ position: 'fixed', top: 125, left: 0 }}>
                <Tabs tabs={tabs2}
                    initialPage={0}
                    tabBarPosition="top"
                    renderTab={tab => <span>{tab.title}</span>}
                    usePaged={false}
                >
                    <div style={{backgroundColor: '#fff' }}>
                        <DetailBar_Left />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
