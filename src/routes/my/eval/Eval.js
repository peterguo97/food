import React, { Component } from "react";
import { List, TextareaItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from "dva";

class Eval extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    onClick = () => {
        this.props.form.validateFields((error, value) => {
            if(value.count) {
                const url = this.props.eval.url;
                this.props.dispatch({ type: 'eval/fetch', payload: {text: value.count, url: url}})
            } else {
                Toast.info('还没有填写', 1);
            }
            // console.log(value.count);
        });
        
    }
    render() {
        const { getFieldProps } = this.props.form;
        const styles = {
            backgroundColor: '#f5f5f9'
        };
        
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
                    placeholder='请输入你的评价...'
                />
                <WhiteSpace style={{ backgroundColor: '#f5f5f9'}} type="lg"/>
                <Button type="primary" onClick={this.onClick}>提交</Button>
            </List>
        )
    }
}

const Evals = createForm()(Eval);
function mapStateToProps(state) {
    return { eval: state.eval };
}

const EvalsState = connect(mapStateToProps)(Evals);

export default EvalsState;