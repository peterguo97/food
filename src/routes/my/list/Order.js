import React, { Component } from "react";
import { List, Flex, Button } from "antd-mobile";
import { connect } from "dva";
import { Link } from "dva/router";
import food from "../../../assets/food5.jpg";
import yay from "../../../assets/yay.jpg";
import styles from "./order.css";

const Item = List.Item;
class Order extends Component {
    multiply = (a, b) => {
        return a * b;
    }
    refund = () => {     
        this.props.dispatch({ type: 'listdetail/refund'});
    }
    render() {
        const { name, phone, list, address } = this.props.order;
        console.log(name);
        
        return(
            <div className={styles.main}>
                <img src={yay} alt="交易成功" height="80" width="100%"/>
                <header className={styles.header}>
                    <p>收货人：{name}</p>
                    <p>电话号码：{phone}</p>
                    <p>收货地址：{address}</p>
                </header>
                <List className={styles.list}>
                    <Link to={`../${list.id}/detail`} className={styles.color}>
                        <Flex className={styles.listheader}>
                            <Flex.Item>{list.store}</Flex.Item>
                            <Flex.Item className={styles.textalign}>{list.result}</Flex.Item>
                        </Flex>
                   
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
                </List>
                <footer className={styles.footer}>
                   <Button type="primary">确认</Button>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { order: state.order };
}

const OrderState = connect(mapStateToProps)(Order);
export default OrderState;