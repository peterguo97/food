import React, { Component } from 'react';
import { List, TextareaItem, InputItem, Button, Picker } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { createForm } from 'rc-form';
import { connect } from "dva";

const Item = List.Item;

class WriteAddress extends Component {
    submit = () => {

    }
    render() {

        const { getFieldProps } = this.props.form;
        return (
            <List>
                <InputItem
                    {...getFieldProps('name')}
                >姓名</InputItem>
                <InputItem
                    {...getFieldProps('phone')}
                    type="phone"
                    placeholder="186 1234 1234"
                >手机号码</InputItem>
                <Picker extra="请选择(可选)"
                    data={district}
                    {...getFieldProps('district', {
                        initialValue: ['11', '1101', '110101'],
                    })}
                    title="地址"
                    onOk={e => console.log('ok', e)}
                    onDismiss={e => console.log('dismiss', e)}
                >
                    <Item arrow="horizontal">地址</Item>
                </Picker>
                <TextareaItem
                    {...getFieldProps('information')}
                    title="详细地址"
                    data-seed="logId"
                    placeholder="详细地址（如门牌号）"
                    autoHeight
                />
                <Button type="primary" onClick={this.submit}>确定</Button>
            </List>
        )
    }
}

const TestWrapper = createForm()(WriteAddress);

function mapStateToProps(state) {
    return { writeAddress: state.lwriteAddress };
}

const TestWrapperState = connect(mapStateToProps)(TestWrapper);
// const User = createForm()(Login);
export default TestWrapperState;