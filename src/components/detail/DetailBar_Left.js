import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';

const tabs = [
    { title: '狗狗最爱' },
    { title: '每单必点' },
    { title: '促销折扣' },
];
export default class DetailBar_Left extends React.Component {
    render(){
        return(
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                    tabBarPosition="left"
                    usePaged={false}
                    tabDirection="vertical"
                    renderTab={tab => <span style={{height: '50px'}}>{tab.title}</span>}
                    style={{ height: 200}}
                >
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
} 
