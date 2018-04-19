import React from 'react';
import { List } from 'antd-mobile';
import img from '../assets/food5.jpg';
import normal from './css/basic.css';

const Item = List.Item;
const Brief = Item.Brief;

class ShopList extends React.Component {
    state = {
        disabled: false,
    }

    render() {
        return (<div>
            <List renderHeader={() => '商家列表'} className={normal.list}>
                <Item 
                    arrow="horizontal"
                    multipleLine
                    onClick={() => { }}
                    thumb={img}
                    >
                    宠物饲料 <Brief>点点饲料</Brief>
                </Item>
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => { }}
                    thumb={img}
                >
                    宠物饲料 <Brief>点点饲料</Brief>
                </Item>
            </List>
        </div>);
    }
}

export default ShopList;
