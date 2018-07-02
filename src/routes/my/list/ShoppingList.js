import React, { Component } from "react";
import { List, Flex, Modal } from "antd-mobile";
import { Link } from "dva/router";
import styles from "./ShoppingList.css";
import { connect } from "dva";
import Return from "../../../components/return/return.js";

const Item = List.Item;
const alert = Modal.alert;

// let datas = [
//     { id: 5, title: '商品', sub: '1', price: 250, num: 2, store: '饲料公司', result: '交易成功'},
//     { id: 2, title: '评价', sub: '2', price: 250, num: 2, store: '饲料公司', result: '交易成功'},
//     { id: 3, title: '商家', sub: '3', price: 250, num: 2, store: '饲料公司', result: '交易成功'},
// ];
class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            prevPage: '/user'
        }
    }
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
    multiply = (i) => {
        let price = 0.00;
        i.main.map(list => {
            price += list.price * list.num;
            return null;
        })
        return price;
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
        const { data } = this.props.shoppingList;
        // data.main.map(i => {
        //     price += i.num * i.price;
        //     return null;
        // })
        return(
            <div>
                <Return page={this.state.prevPage} />
                {data.map((i, index) => 
                <List className={styles.list} key={index}>
                    <Link to={`../${i.id}/detail`} className={styles.color}>
                        <Flex className={styles.listheader}>
                            <Flex.Item>{i.store}</Flex.Item>
                            <Flex.Item className={styles.textalign}>{i.result}</Flex.Item>
                        </Flex>
                    </Link>
                    <Link to={`./listdetail/${i.id}`} className={styles.color}>
                    {
                        i.main.map((list, index) => <div className={styles.contain} key={index}>
                                <Item multipleLine="true" className={styles.item}>
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
                            
                        </div>)
                    }
                    </Link>
                    <Flex className={styles.allPrice}>
                        <Flex.Item className={styles.price}>总价￥{this.multiply(i)}</Flex.Item>
                    </Flex>

                    <div className={styles.listfooter}>
                        {/* {i.isPay?<Link to={`./order/${i.id}`} className={styles.eval}>待付款</Link>:<Link to={`./eval/${i.id}`} className={styles.eval}>评价</Link>} */}
                        {/* <Link to="./logistics" className={styles.eval} onClick={this.logistics.bind(this, list.id)}>查看物流</Link> */}
                        <IsPay isPay={i.isPay} id={i.id} />
                        <div className={styles.eval} onClick={this.delete.bind(this, i.id)}>删除订单</div>
                    </div>
                </List>
                )}
            </div>
        )
    }
}

class IsPay extends Component {
    render() {
        const isPay = this.props.isPay;
        const id = this.props.id;
        const color = {
            color: '#000'
        }
        let btnState;
        if(isPay === '0') {
            btnState = <Link to={`./order/${id}`} style={color}>待付款</Link>
        } else if(isPay === '1') {
            btnState = '待收货'
        } else if(isPay === '2') {
            btnState = <Link to={`./eval/${id}`} style={color}>评价</Link>
        }
        return(
            <div className={styles.eval}>
                { btnState }
            </div>
           
        )
    }
}
function mapStateToProps(state) {
    return { shoppingList: state.shoppingList };
}

const ShoppingListState = connect(mapStateToProps)(ShoppingList);
// const User = createForm()(Login);
export default ShoppingListState;