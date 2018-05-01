import React, { Component } from "react";
import { Flex, List, InputItem, Button, WingBlank, WhiteSpace, Checkbox, Toast } from "antd-mobile";
// import { createForm } from 'rc-form';
import { connect } from "dva";
import styles from "./Register.css";


function message(mes, time = 1) {
    return Toast.info(mes, time);
}

class Register extends Component {
    onErrorClick = () => {
        if(this.props.register.hasError) {
            message('输入11位号码');
        }
    }

    onChange = (value) => {
        if(value.replace(/\s/g, '').length < 11) {
            this.props.dispatch({ type: 'register/changeErrorTrue'})
        } else {
            this.props.dispatch({ type: 'register/changeErrorFalse' })
        }
        this.props.dispatch({type: 'register/value', payload: value})
    }
    // 密码
   /*  password = (value) => {
        this.props.dispatch({ type: 'register/password', payload: value});
    } */
    passwordBlur = (value) => {
        // var reg = /^.{6,16}$/;
        // var regEn = /^[a-zA-Z]+$/;
        // var regNum = /^[0-9]+$/;
        const reg = /^(?![a-zA-z]+$)(?!\d+$)(?!([!@#$%^&*`~-]|\+)+$)([a-zA-Z\d!@#$%^&*`~-]|\+){8,16}$/;
        if(value) {
            if (!reg.test(value)) {
                message('密码要求8~16位且不允许全数字或全字母', 3);
            } else {
                this.props.dispatch({ type: 'register/password', payload: value });
            }
        }
        
    }
    passwordAgain = (value) => {
        this.props.dispatch({ type: 'register/passwordAgain', payload: value});
    }
    // 保存验证码
    verifCode = (value) => {
        this.props.dispatch({ type: 'register/verifCode', payload: value});
    }
    // 验证码
    sendCode = () => {
        const reg = /^(13[0-9]|14[579]|15[012356789]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        const num = this.props.register.value.replace(/\s/g, '');
        const phoneNum = Number(num);
        if (!reg.test(phoneNum)) {
            message('手机号有误！');
        }
    }
    checkbox = (e) => {
        this.props.dispatch({ type: 'register/check', payload: e.target.checked });   
    }
    // 注册检验
    registerBtn = () => {
        const { value, userPassword, userPasagain, code, checked } = this.props.register;
        const reg = {
            isPhone: function(arr) {
                const regex = /^(13[0-9]|14[579]|15[012356789]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                const phoneNum = Number(arr.replace(/\s/g, ''));
                return !regex.test(phoneNum);
            },
            hasPas: function(arr) {
                return Boolean(arr);
            }
        }
        if(reg.isPhone(value)) {
            message('手机号有误！');
        } else if(!reg.hasPas(userPassword)) {
            message('请输入密码！');
        } else if(userPassword !== userPasagain) {
            message('两次密码输入不一致！');
        } else if(!code) {
            message('未填写验证码！');
        } else if(!checked) {
            message('未同意用户协议！');
        } else {
            this.props.dispatch({ type: 'register/sendData', payload: this.props.register});
        }
    }
    render() {
        const AgreeItem = Checkbox.AgreeItem;
        const { hasError, value } = this.props.register;
        
        return(
            <WingBlank className={styles.registerList}>
                <List className={styles.img}>
                    <InputItem
                        type="phone"
                        placeholder="请输入常用手机号"
                        className={styles.userInput}
                        error={hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={value}
                        autoFocus
                    >
                        {/* <div className={styles.userIco}/> */}
                        <i className="fa fa-user" />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        className={styles.userInput}
                        onBlur={this.passwordBlur}
                    >
                        {/* <div className={styles.passwordIco} /> */}
                        <i className="fa fa-lock" />
                    </InputItem>
                    <WhiteSpace size="lg" />
                 
                    <InputItem
                        type="password"
                        placeholder="请确认密码"
                        className={styles.userInput}
                        onChange={this.passwordAgain}
                    >
                        {/* <div className={styles.passwordIco} /> */}
                        <i className="fa fa-lock" />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item>
                            <InputItem
                                placeholder="验证码"
                                className={styles.userInput}
                                onChange={ this.verifCode }
                            />
                        </Flex.Item>
                        <Flex.Item className={styles.codeBtn}>
                            <Button type="primary" className={styles.codeFont} onClick={this.sendCode}>发送验证码</Button>
                        </Flex.Item>
                    </Flex>
                </List>
                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item>
                        <AgreeItem data-seed="logId" onChange={this.checkbox}>
                           同意用户协议 <a className={styles.protocol} href="./login">《饲料公司》</a>
                        </AgreeItem>
                    </Flex.Item>
                </Flex>

                <WhiteSpace size="lg" />
                <Button type="primary" onClick={ this.registerBtn }>注册</Button>
            </WingBlank>
        )
    }
}

function mapStateToProps(state) {
    return { register: state.register };
}

const registerPage = connect(mapStateToProps)(Register);
// const UserRegister = createForm()(Register);
export default registerPage;