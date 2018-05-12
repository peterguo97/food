import React, { Component } from "react";
import { List, TextareaItem, Button, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';


class Eval extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    render() {
        const { getFieldProps } = this.props.form;
        const styles = {
            backgroundColor: '#f5f5f9'
        }
        return(
            <List>
                <WhiteSpace style={styles}/>
                <TextareaItem
                    {...getFieldProps('count', {
                        placeholder: '请输入你的评价...'
                    })}
                    ref={el => this.autoFocusInst = el}
                    rows={5}
                    count={200}
                />
                <WhiteSpace style={{ backgroundColor: '#f5f5f9'}} type="lg"/>
                <Button type="primary">提交</Button>
            </List>
        )
    }
}

const Evals = createForm()(Eval);
export default Evals;