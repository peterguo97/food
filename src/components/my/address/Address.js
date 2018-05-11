import React, { Component } from 'react';
import { Link } from "dva/router";
import { List } from 'antd-mobile';
import styles from "./Address.css";

const Item = List.Item;
const Brief = Item.Brief;

class Address extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, name: '小小', phone: 12345678910, address: '河北省保定市莲池区华电路689号河北省啦啦啦啦'},
                {id: 2, name: '小小', phone: 12345678910, address: '河北省保定市莲池区华电路689号河北省啦啦啦啦'}
            ]
        }
    }
    render() {
        const data = this.state.data;
        return (
            <div>
               { 
                   data.map(i => 
                        <List className="my-list" key={i.id}>
                            <Item
                                extra={
                                    <Link to="./write"><i className="fa fa-edit"></i></Link>
                                }
                                multipleLine
                            >
                                {i.name} {i.phone}<Brief>{i.address}</Brief>
                            </Item>
                        </List>
                   )
               }
               <Link to="./write">
                <footer>
                    新增收货地址
                </footer>
               </Link>
            </div>
        )
    }
}

export default Address;