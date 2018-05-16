import React, { Component } from 'react';
import { List } from "antd-mobile";
import { Link } from "dva/router";
import styles from "./Merchant.css";

const Item = List.Item;

class Merchant extends Component {
    render() {
        return (
            <div>
                <List className={styles.merchantlist}>
                    <Link to="./aboutus">
                        <Item
                            // thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            // onClick={()}
                        >关于我们</Item>
                    </Link>
                    <Link to="./contactus">
                        <Item
                            // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => { }}
                            arrow="horizontal"
                        >
                            联系我们
                        </Item>
                    </Link>
                    <a href="!#">
                        <Item
                            // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => { }}
                            arrow="horizontal"
                        >
                            退出登录
                        </Item>
                    </a>
                </List>
            </div>
        );
    }
}

export default Merchant;