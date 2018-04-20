import React from 'react';
import { Link } from 'dva/router';
import { List, WingBlank } from 'antd-mobile';
import img from '../assets/food5.jpg';
import normal from './css/basic.css';

const Item = List.Item;
const Brief = Item.Brief;
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
                        data.map(function(val) {
                            const str = val.id + val.name;
                            console.log(str);
                            return (
                                <Item 
                                    key={str}
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => { }}
                                    thumb={img}
                                >
                                    <Link to={`${val.id}/detail`}>
                                        宠物饲料 <Brief>{val.name}</Brief>
                                    </Link>
                                </Item>
                            )
                        }, this)
                    }
                </List>
            </WingBlank>
        );
    }
}

export default ShopList;
