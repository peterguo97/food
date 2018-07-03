import React, { Component } from 'react';
import { List, TextareaItem, InputItem, Button, Picker, Toast } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { createForm } from 'rc-form';
import { connect } from "dva";
import axios from 'axios';
import { routerRedux } from 'dva/router';
import Return from "../../../components/return/return.js";
const Item = List.Item;

class WriteAddress extends Component {
    constructor() {
        super();
        this.state = {
            prevPage: `/address`
        }
    }
    value(e) {
        console.log(e)
    }
    submit = () => {
        this.props.form.validateFields((error, value) => {
            let num = 0;
            let j = 0; 
            for(let i in value) {
                if(value[i]) {
                    num++;     
                }
                j++;
            }
            if(num === j) {
               
                const reg = /^(13[0-9]|14[579]|15[012356789]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                const num = value.phone.replace(/\s/g, '');
                const phoneNum = Number(num);
                if (!reg.test(phoneNum)) {
                   Toast.info('手机号有误！', 1);
                } else {
                    let mainAddress = '';
                    district.map(e => {
                        if (e.value === value.district[0]) {
                            mainAddress += e.label;
                            e.children.map(i => {
                                if (i.value === value.district[1]) {
                                    mainAddress += i.label;
                                    i.children.map(j => {
                                        if (j.value === value.district[2]) {
                                            mainAddress += j.label;
                                        }
                                        return null;
                                    });
                                }
                                return null;
                            })
                        }
                        return null;
                    });
                    
                    value['mainAddress'] = mainAddress;
                    if(this.props.match.params.payment){
                        let payment = this.props.match.params.payment;
                        axios.post('/api/addresses/store',value).then((message)=>{
                            if(message.status === 200){
                                this.props.dispatch(routerRedux.push(`/order/${payment}`));
                            }
                        })
                    }
                    else {
                        value['id'] = this.props.writeAddress.id;                         
                        this.props.dispatch({
                            type: 'writeAddress/sendInfoLink',
                            payload: value
                        });
                    }
                }
            } else {
                Toast.info('你还没有填完！', 1);
            }
            // if (value.count) {
            //     this.props.dispatch({ type: 'eval/fetch', payload: value.count })
            // } else {
            //     Toast.info('还没有填写', 1);
            // }
            // console.log(value.count);
        });
    }
    render() {
        
        const { getFieldProps } = this.props.form;
        const { name, phone, address, information } = this.props.writeAddress;
        return (
            <div>
                <Return page={this.state.prevPage} />
                <List>
                    <InputItem
                        {...getFieldProps('name', {
                            initialValue: name
                        })}
                    >姓名</InputItem>
                    <InputItem
                        {...getFieldProps('phone', {
                            initialValue: phone
                        })}
                        type="phone"
                        placeholder="186 1234 1234"
                    >手机号码</InputItem>
                    <Picker extra="请选择(可选)"
                        data={district}
                        {...getFieldProps('district', {
                            initialValue: address,
                        })}
                        title="地址"
                        onOk={e => console.log(e)}
                        onDismiss={e => console.log('dismiss', e)}
                    >
                        <Item arrow="horizontal">地址</Item>
                    </Picker>
                    <TextareaItem
                        {...getFieldProps('information', {
                            initialValue: information
                        })}
                        title="详细地址"
                        data-seed="logId"
                        placeholder="详细地址（如门牌号）"
                        autoHeight
                    />
                    <Button type="primary" onClick={this.submit}>确定</Button>
                </List>
            </div>
          
        )
    }
}

const TestWrapper = createForm()(WriteAddress);

function mapStateToProps(state) {
    return { writeAddress: state.writeAddress };
}

const TestWrapperState = connect(mapStateToProps)(TestWrapper);
// const User = createForm()(Login);
export default TestWrapperState;