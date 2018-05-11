import React, { Component } from "react";
import { List, TextareaItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';


class Eval extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    render() {
        const { getFieldProps } = this.props.form;
        return(
            <List>
                <TextareaItem
                    {...getFieldProps('count', {
                        placeholder: '请输入你的评价...'
                    })}
                    ref={el => this.autoFocusInst = el}
                    rows={5}
                    count={200}
                />
                <WhiteSpace style={{ backgroundColor: '#f5f5f9'}}/>
                <WingBlank><Button type="primary">提交</Button></WingBlank>
            </List>
        )
    }
}

const Evals = createForm()(Eval);
export default Evals;