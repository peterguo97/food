import React, { Component } from "react";
import { List, Flex, Button } from "antd-mobile";
import { connect } from "dva";
import { Link } from "dva/router";
import food from "../../../assets/food5.jpg";
import yay from "../../../assets/yay.jpg";
import styles from "./order.css";
import { routerRedux } from 'dva/router';
import axios from 'axios'; 

const Item = List.Item;
class Order extends Component {
    multiply = (a, b) => {
        return a * b;
    }
    refund = () => {   
        this.props.dispatch({ type: 'listdetail/refund'});
    }
    // 确认跳转
    submit = () => { 
        let paymentid = this.props.match.params.payment;
        axios.post('/pay',{ listId: paymentid}).then((message)=>{
            let data = message.data;
            console.log(data);
            // WeixinJSBridge.invoke(
            //   'getBrandWCPayRequest', {
            //     "appId": data.appId, //公众号名称，由商户传入     
            //     "timeStamp": data.timeStamp, //时间戳，自1970年以来的秒数
            //     "nonceStr": data.nonceStr, //随机串     
            //     "package": data.package,
            //     "signType": data.signType, //微信签名方式：
            //     "paySign": data.paySign //微信签名 
            //   },
            //   function (res) {
            //     if (res.err_msg === "get_brand_wcpay_request:ok") {
            //         alert('hello');
            //     } // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
            //   }
            // );
        })
    }
    render() {
        const { name, phone, list, address } = this.props.order;
        let price = 0.00;
        list.map(i => {     
            price += i.price * i.num;
            return null;
        })
        return(
            <div className={styles.main}>
                <img src={yay} alt="交易成功" height="80" width="100%"/>
                <header className={styles.header}>
                    <p>收货人：{name}</p>
                    <p>电话号码：{phone}</p>
                    <p>收货地址：{address}</p>
                </header>
                {
                  list.map(i => 
                     <List className={styles.list} key={i.id}>
                        <Link to={`../${list.id}/detail`} className={styles.color} key={i.id}>
                            <Flex className={styles.listheader}>
                                <Flex.Item>{i.store}</Flex.Item>
                                <Flex.Item className={styles.textalign}>{i.result}</Flex.Item>
                            </Flex>
                    
                            <Item thumb={food} multipleLine="true" className={styles.item}>
                                <Flex>
                                    <Flex.Item>
                                        <div>{i.title}</div>
                                        <div>{i.sub}</div>
                                    </Flex.Item>
                                    <Flex.Item className={styles.flexitem}>
                                        <div>￥{i.price}</div>
                                        <div>×{i.num}</div>
                                    </Flex.Item>

                                </Flex>
                            </Item>
                        </Link>
                        <Flex className={styles.listheader}>
                            <Flex.Item className={styles.textalign}>共{i.num}件商品 合计: ￥{this.multiply(i.num, i.price)}</Flex.Item>
                        </Flex>
                    </List>
                )}
                <p style={{color: 'red', float: 'right', paddingRight: 15}}>总价￥{price}</p>
                <footer className={styles.footer}>
                   <Button type="primary" onClick={this.submit}>确认</Button>
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