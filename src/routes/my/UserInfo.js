import React, { Component } from 'react';
import { List } from "antd-mobile";
import { Link } from "dva/router";
import styles from "./UserInfo.css";

const Item = List.Item;

class UserInfo extends Component {
    render() {     
        return (
            <List className={styles.mylist}>
                <Link to="./list">
                    <Item
                        // thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        // onClick={this.list}
                    >我的订单</Item>
                </Link>
                <Link to="./shopping">
                    <Item
                        // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        购物车
                    </Item>
                </Link>
                <Link to="./address">
                    <Item
                        // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        收货地址
                    </Item>
                </Link>
            </List>
        );
    }
}

export default UserInfo;