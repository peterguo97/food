import React, { Component } from "react";
import { List, Flex, Modal } from "antd-mobile";
import { Link } from "dva/router";
import  food  from "../../../assets/dog.jpg";
import styles from "./ShoppingList.css";
import { connect } from "dva";
const Item = List.Item;
const alert = Modal.alert;

// let datas = [
//     { id: 5, title: '商品', sub: '1', price: 250, num: 2, store: '饲料公司', result: '交易成功'},
//     { id: 2, title: '评价', sub: '2', price: 250, num: 2, store: '饲料公司', result: '交易成功'},
//     { id: 3, title: '商家', sub: '3', price: 250, num: 2, store: '饲料公司', result: '交易成功'},
// ];
class ShoppingList extends Component {
    delete(list) {
        // console.log(datas)
        alert('删除订单', '确定删除吗?', [
            { text: '取消' },
            { text: '同意', onPress: () => {
                let num;
                const datas = this.props.shoppingList.data;
                num = datas.findIndex((value, index) => {
                    return value.id === list;
                });
                if(num === 0) {
                    datas.shift();
                } else {
                    datas.splice(num, num);
                }
                this.props.dispatch({ type: 'shoppingList/delete', payload: {data: datas, id: list}});
            }
               
           },
        ]);
    }
    // 单价乘以数量
    multiply = (a, b) => {
        return a * b;
    }
    // 查看物流
    // logistics(id) {
    //     this.props.dispatch({ type: 'shoppingList/logis', payload: id}); 
    // }
    // 评价
    // eval(id) {
    //     this.props.dispatch({ type: 'shoppingList/eval', payload: id }); 
    // }
    render() {
        const data = this.props.shoppingList.data;  
        return(
            <List className={styles.list}>
                {
                    data.map(list => <div className={styles.contain} key={list.id}>
                        <Link to={`../${list.id}/detail`} className={styles.color}>
                            <Flex className={styles.listheader}>
                                <Flex.Item>{list.store}</Flex.Item>
                                <Flex.Item className={styles.textalign}>{list.result}</Flex.Item>
                            </Flex>
                        </Link>
                        <Link to={`./listdetail/${list.id}`} className={styles.color}>
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
                            <Link to={`./eval/${list.id}`} className={styles.eval}>评价</Link>
                            {/* <Link to="./logistics" className={styles.eval} onClick={this.logistics.bind(this, list.id)}>查看物流</Link> */}
                            <Link to={`./logistics/${list.id}`} className={styles.eval}>查看物流</Link>
                            <div className={styles.eval} onClick={this.delete.bind(this, list.id)}>删除订单</div>
                        </div>
                    </div>)
                }
            </List>
        )
    }
}

function mapStateToProps(state) {
    return { shoppingList: state.shoppingList };
}

const ShoppingListState = connect(mapStateToProps)(ShoppingList);
// const User = createForm()(Login);
export default ShoppingListState;