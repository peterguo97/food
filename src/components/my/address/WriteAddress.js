import React, { Component } from 'react';
import { List, TextareaItem, InputItem, Button, Picker } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { createForm } from 'rc-form';


const Item = List.Item;

class WriteAddress extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        console.log(district);
        const { getFieldProps } = this.props.form;
        return (
            <List>
                <InputItem
                >姓名</InputItem>
                <InputItem
                    type="phone"
                    placeholder="186 1234 1234"
                >手机号码</InputItem>
                <Picker extra="请选择(可选)"
                    data={district}
                    {...getFieldProps('district', {
                        initialValue: ['340000', '341500', '341502'],
                    })}
                    title="地址"
                    onOk={e => console.log('ok', e)}
                    onDismiss={e => console.log('dismiss', e)}
                >
                    <Item arrow="horizontal">地址</Item>
                </Picker>
                <TextareaItem
                    title="详细地址"
                    data-seed="logId"
                    placeholder="详细地址（如门牌号）"
                    autoHeight
                />
                <Button type="primary">确定</Button>
            </List>
        )
    }
}

const TestWrapper = createForm()(WriteAddress);
export default TestWrapper;