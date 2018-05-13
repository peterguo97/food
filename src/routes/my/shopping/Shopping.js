import React, { Component } from "react";
import { Checkbox, List, Flex, Button } from "antd-mobile";
import food from "../../../assets/yay.jpg";
import styles from "./Shopping.css";
import { connect } from "dva";

const CheckboxItem = Checkbox.CheckboxItem;
const Item = List.Item;


function removeItem(_arr) {
    let arr = [];
    for (let i = 0; i < _arr.length; i++) {
        if(!_arr[i].checked) {
            arr.push(_arr[i]);
        }
    }
    return arr;  
}

class Shopping extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         data: [
    //             {id: 1, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250},
    //             {id: 2, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250},
    //             {id: 3, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250}
    //         ],
    //         checkedAll: false,
    //         priceAll: 0.00
    //     }
    // }
    change = (item) => {
        const datas = this.props.shopping.data;
        
        let price = this.props.shopping.priceAll;

        datas.map(i => {
            if(i.id === item.id) {
                i.checked = !item.checked;
                if(i.checked) {
                    price += i.num * i.price;
                } else {
                    price -= i.num * i.price;
                }
            }
            return null;
        });
        this.props.dispatch({ type: 'shopping/change', payload: {data: datas, priceAll: price}});
        // this.setState({
        //     data: datas,
        //     priceAll: price
        // })
        
    }
    decrease = (item) => {
        const datas = this.props.shopping.data;
        let price = this.props.shopping.priceAll;    
        if(item.num) {  
            datas.map(i => {
                if(i.id === item.id) {
                    i.num = item.num - 1;
                    if(item.checked) {
                        price -= i.price;
                    }
                    if(i.num === 0) {
                        i.checked = false;
                    }
                }
                return null;
            });
            this.props.dispatch({ type: 'shopping/change', payload: { data: datas, priceAll: price } });
            // this.setState({
            //     data: datas,
            //     priceAll: price
            // })
        }
    }
    add = (item) => {
        const datas = this.props.shopping.data;
        let price = this.props.shopping.priceAll;
        datas.map(i => {
            if (i.id === item.id) {
                i.num = item.num + 1;
                if(item.checked) {
                    price += i.price;
                }
            }
            return null;
        });
        this.props.dispatch({ type: 'shopping/change', payload: { data: datas, priceAll: price } });
        // this.setState({
        //     data: datas,
        //     priceAll: price
        // })
    }
    checkAll = () => {
        const checked = this.props.shopping.checkedAll;
        const datas = this.props.shopping.data;
        let price = 0;
        if (!checked) {
            datas.map(i => {
                i.checked = true;
                price += i.num * i.price;
                return null;
            });
            
        } else {
            datas.map(i => {
                i.checked = false;
                return null;
            }) 
        };
        this.props.dispatch({ type: 'shopping/change', payload: { data: datas, priceAll: price, checkedAll: !checked } });
        // this.setState({
        //     data: datas,
        //     priceAll: price,
        //     checkedAll: !checked
        // })
    }
    remove = () => {
        const datas = this.props.shopping.data;
        const checked = this.props.shopping.checkedAll;
        // 全选时删除
        let check;
        if(checked) {
            check = false;
        }
        const data = removeItem(datas);
        this.props.dispatch({ type: 'shopping/change', payload: { data: data, priceAll: 0.00, checkedAll: check } });
        // this.setState({
        //     data: data,
        //     priceAll: 0.00,
        //     checkedAll: check
        // })
    }
    render() {
        const datas = this.props.shopping.data; 
        const checked = this.props.shopping.checkedAll;
        
        return(
            <div>
                <List>
                    {datas.map(i => 
                        <CheckboxItem key={i.id} onChange={(item) => { this.change(i)}} style={{backgroundColor: '#fff'}} checked={i.checked}>
                                <Item thumb={food} multipleLine="true" className={styles.item} wrap>
                                <Flex className={styles.intro}>
                                        <Flex.Item>
                                            {i.intro}
                                        </Flex.Item>
                                    </Flex>
                                    <Flex className={styles.intro}>
                                        <Flex.Item>
                                            ￥{i.price}
                                        </Flex.Item>
                                        <Flex.Item className={styles.stepper}>
                                            <Button onClick={(item) => this.decrease(i)}>-</Button>
                                            <div className={styles.num}>{i.num}</div>
                                            <Button onClick={(item) => this.add(i)}>+</Button>
                                        </Flex.Item>
                                    </Flex>
                                </Item>
                        </CheckboxItem>
                    )}
                </List>
                <Flex className={styles.footer}>
                    <Flex.Item className={styles.btn}>
                        <CheckboxItem style={{ backgroundColor: '#fff' }} checked={checked} onChange={this.checkAll}>
                            全选
                        </CheckboxItem>
                    </Flex.Item>
                    <Flex.Item className={styles.price}>
                        ￥{this.props.shopping.priceAll}
                    </Flex.Item>
                    <Flex.Item className={styles.remove} onClick={this.remove}>
                        清除
                    </Flex.Item>
                    <Flex.Item className={styles.pay}>
                        支付
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { shopping: state.shopping };
}

const ShoppingState = connect(mapStateToProps)(Shopping);
export default ShoppingState;