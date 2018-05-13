import React from 'react';
import { List, WingBlank } from 'antd-mobile';
import normal from './css/basic.css';
import IndexListitem from './IndexListItem';

const data = [{id: '1',name: '点点饲料'},{id:'2',name:'点点最爱'}];

class ShopList extends React.Component {
    state = {
        disabled: false,
    }

    render() {
        return (
            <WingBlank>
                <List renderHeader={() => '商家列表'} className={normal.list}>
                    {
                        data.map(function(value) {
                            const str = value.id + value.name;
                            return (
                                <div key={str}>
                                    <IndexListitem data={value}/>
                                </div>
                            )
                        }, this)
                    }
                </List>
            </WingBlank>
        );
    }
}

export default ShopList;
