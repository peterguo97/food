import React, { Component } from "react";
import { Checkbox, Flex, Button, Toast } from "antd-mobile";
// import food from "../../../assets/test.png";
import styles from "./Shopping.css";
import { connect } from "dva";

const CheckboxItem = Checkbox.CheckboxItem;
// const Item = List.Item;


function removeItem(_arr) {
    let arr = [];
    for (let i = 0; i < _arr.length; i++) {
        if(_arr[i].checked) {
            arr.push(_arr[i]);
        }
    }
    return arr;  
}

class Shopping extends Component {
    constructor() {
        super();
        this.state = {
            priceAll: 0.00
        }
    }
    change = (item) => {
        const datas = this.props.shopping.data;
        let price = Number(this.state.priceAll);
        datas.map(i => {
            if(i.id === item.id) {
                i.checked = !item.checked;
                if(i.checked) {
                    price += (+i.num) * (+i.price);
                } else {
                    price -= (+i.num) * (+i.price);
                }
            }
            return null;
        });
        this.props.dispatch({ type: 'shopping/change', payload: {data: datas}});
        this.setState({
            priceAll: price
        });
        // this.setState({
        //     data: datas,
        //     priceAll: price
        // })
        
    }
    decrease = (item) => {
        const datas = this.props.shopping.data;
        let price = this.state.priceAll;
        
        console.log(item.num);
        
        if(item.num > 1) {  
            datas.map(i => {
                if(i.id === item.id) {
                    i.num = item.num - 1;
                    if(item.checked) { 
                        price -= i.price;
                    }
                }
                return null;
            });
            this.props.dispatch({ type: 'shopping/change', payload: { data: datas } });
            this.setState({
                priceAll: price
            });
        } else {
            Toast.info('不能减少了！', 1);
        }
    }
    add = (item) => {
        const datas = this.props.shopping.data;
        let price = +this.state.priceAll;
        datas.map(i => {
            if (i.id === item.id) {
                i.num = +item.num + 1;
                if (item.checked) {
                    if (i.num <= i.max) {
                        price += +i.price;
                    }
                }
                if(i.num > i.max) {
                    Toast.offline('超过最大库存了！', 1);
                    i.num = i.max;
                }
            }
            return null;
        });
        this.props.dispatch({ type: 'shopping/change', payload: { data: datas } });
        this.setState({
            priceAll: price
        });
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
        this.props.dispatch({ type: 'shopping/change', payload: { data: datas, checkedAll: !checked } });
        this.setState({
            priceAll: price
        });
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
        if(data.length) {
             this.props.dispatch({ type: 'shopping/deleteChange', payload: { data: data, checkedAll: check } });
        } else {
              Toast.info('未选择', 1);
        }
       
        this.setState({
            priceAll: 0.00
        })
    }
    pay = () => {
        const { data, id } = this.props.shopping;
        let datas = [];
        data.map(i => {
            if(i.checked) {
                datas.push(i);
            }
            return null;
        });

        if(datas.length) {
            this.props.dispatch({ type: 'shopping/pay', payload: {id: id, data: datas} });
        } else {
            Toast.info('未选择任何商品', 1);
        }
    }

    render() {
        const datas = this.props.shopping.data; 
        const checked = this.props.shopping.checkedAll;
        const checkbox = {
            backgroundColor: '#fff',
            overflow: 'inherit',
            paddingLeft: 5
        }
        return(
        <div>
            {datas.map(i => 
                <div key={i.id} className={styles.foodItem}>
                    <CheckboxItem key={i.id} onChange={(item) => { this.change(i)} } checked={i.checked} style={checkbox}>
                    </CheckboxItem>
                    <div className={styles.itemRight}>
                        <img src={i.img} alt={i.id}/>
                        <div className={styles.imgRight}>
                            <Flex className={styles.intro}>
                                <Flex.Item>
                                    {i.intro.length>20?i.intro.substr(0,20):i.intro}
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
                        </div>   
                    </div>
                </div>
            )}
            
            <Flex className={styles.footer}>
                <Flex.Item className={styles.btn}>
                    <CheckboxItem style={{ backgroundColor: '#fff' }} checked={checked} onChange={this.checkAll}>
                        全选
                    </CheckboxItem>
                </Flex.Item>
                <Flex.Item className={styles.price}>
                    ￥{this.state.priceAll}
                </Flex.Item>
                <Flex.Item className={styles.remove} onClick={this.remove}>
                    清除
                </Flex.Item>
                <Flex.Item className={styles.pay} onClick={this.pay}>
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