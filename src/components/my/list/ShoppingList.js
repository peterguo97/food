import React, { Component } from "react";
import { List, Flex, Modal } from "antd-mobile";
import { Link } from "dva/router";
import  food  from "../../../assets/dog.jpg";
import styles from "./ShoppingList.css";
const Item = List.Item;
const alert = Modal.alert;

let datas = [
    { id: 5, title: '商品', sub: '1', price: 250, num: 2, store: '饲料公司', result: '交易成功', all: 500, listFun: [
        {name: '评价', url: './eval'}, {name: '查看物流', url: './a'}, {name: '删除订单',}]
    },
    { id: 2, title: '评价', sub: '2', price: 250, num: 2, store: '饲料公司', result: '交易成功', all: 500, listFun: [
        {name: '评价', url: './eval'}, {name: '查看物流', url: './a'}, {name: '删除订单',}]
    },
    { id: 3, title: '商家', sub: '3', price: 250, num: 2, store: '饲料公司', result: '交易成功', all: 500, listFun: [
        {name: '评价', url: './eval'}, {name: '查看物流', url: './a'}, {name: '删除订单',}]
    },
];
class ShoppingList extends Component {
    delete(list) {
        console.log(datas)
        alert('删除订单', '确定删除吗?', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '同意', onPress: () => {
                let num;
                num = datas.findIndex((value, index) => {
                    return value.id === list;
                });
                if(num === 0) {
                    datas.shift();
                } else {
                    datas.splice(num, num);
                }
            }
               
           },
        ]);
    }
    // 单价乘以数量
    multiply = (a, b) => {
        return a * b;
    }
    render() {
        // const items =  datas.map( (list,index) =><div key={index}>{list.title}</div> );
        return(
            <List className={styles.list}>
                {
                    datas.map(list => <div className={styles.contain} key={list.id}>
                        <Link to={`../${list.id}/detail`} className={styles.color}>
                            <Flex className={styles.listheader}>
                                <Flex.Item>{list.store}</Flex.Item>
                                <Flex.Item className={styles.textalign}>{list.result}</Flex.Item>
                            </Flex>
                        </Link>
                        <Link to="./listdetail" className={styles.color}>
                            <Item thumb={food} multipleLine="true" className={styles.item}>
                                <Flex>
                                    <Flex.Item>
                                        <div>{list.title}</div>
                                        <div>{list.sub}</div>
                                    </Flex.Item>
                                    <Flex.Item className={styles.flexitem}>
                                        <div>￥{list.price}</div>
                                        <div>×{list.num}</div>
                                    </Flex.Item>
                                    
                                </Flex>
                            </Item>
                        </Link>
                        <Flex className={styles.listheader}>
                            <Flex.Item className={styles.textalign}>共{list.num}件商品 合计: ￥{this.multiply(list.num, list.price)}</Flex.Item>
                        </Flex>
                        <div className={styles.listfooter}>
                            <Link to="./eval" className={styles.eval}>评价</Link>
                            <Link to="./logistics" className={styles.eval}>查看物流</Link>
                            <div className={styles.eval} onClick={this.delete.bind(this, list.id)}>删除订单</div>
                        </div>
                    </div>)
                }
            </List>
        )
    }
}

export default ShoppingList;