import React, { Component } from "react";
import { Flex, List, InputItem, Button, WingBlank, WhiteSpace, Toast } from "antd-mobile";
// import { createForm } from 'rc-form';
import { connect } from "dva";
import styles from "./ForgerPas.css";

function message(mes, time = 1) {
    return Toast.info(mes, time);
}

class ForgerPas extends Component {
    onErrorClick = () => {
        if (this.props.register.hasError) {
            Toast.info('Please enter 11 digits');
        }
    }

    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.props.dispatch({ type: 'forgetPas/changeErrorTrue' })
        } else {
            this.props.dispatch({ type: 'forgetPas/changeErrorFalse' })
        }
        this.props.dispatch({ type: 'forgetPas/value', payload: value });
    }
    // 密码离开焦点时
    passwordBlur = (value) => {
        // var reg = /^.{6,16}$/;
        // var regEn = /^[a-zA-Z]+$/;
        // var regNum = /^[0-9]+$/;
        const reg = /^(?![a-zA-z]+$)(?!\d+$)(?!([!@#$%^&*`~-]|\+)+$)([a-zA-Z\d!@#$%^&*`~-]|\+){8,16}$/;
        if (value) {
            if (!reg.test(value)) {
                message('密码要求8~16位且不允许全数字或全字母', 3);
            } else {
                this.props.dispatch({ type: 'forgetPas/password', payload: value });
            }
        }

    }

    passwordAgain = (value) => {
        this.props.dispatch({ type: 'forgetPas/passwordAgain', payload: value });
    }

    // 验证码
    sendCode = () => {
        const reg = /^(13[0-9]|14[579]|15[012356789]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        const num = this.props.forgetPas.value.replace(/\s/g, '');
        const phoneNum = Number(num);
        if (!reg.test(phoneNum)) {
            message('手机号有误！');
        }
    }
    // 保存验证码
    verifCode = (value) => {
        this.props.dispatch({ type: 'forgetPas/verifCode', payload: value });
    }
    forgetBtn = () => {
        const { value, userPassword, userPasagain, code } = this.props.forgetPas;
        const reg = {
            isPhone: function (arr) {
                const regex = /^(13[0-9]|14[579]|15[012356789]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                const phoneNum = Number(arr.replace(/\s/g, ''));
                return !regex.test(phoneNum);
            },
            hasPas: function (arr) {
                return Boolean(arr);
            }
        }
        if (reg.isPhone(value)) {
            message('手机号有误！');
        } else if (!reg.hasPas(userPassword)) {
            message('请输入密码！');
        } else if (userPassword !== userPasagain) {
            message('两次密码输入不一致！');
        } else if (!code) {
            message('未填写验证码！');
        } else {
            this.props.dispatch({ type: 'forgetPas/sendData', payload: this.props.forgetPas });
        }
    }

    render() {
        const { hasError, value } = this.props.forgetPas;
        return (
            <WingBlank className={styles.forgetPasList}>
                <List>
                    <InputItem
                        type="phone"
                        placeholder="请输入你的手机号"
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
                        placeholder="新密码"
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
                                onChange={this.verifCode}
                            />
                        </Flex.Item>
                        <Flex.Item className={styles.codeBtn}>
                            <Button type="primary" onClick={this.sendCode}>发送验证码</Button>
                        </Flex.Item>
                    </Flex>
                </List>
                <WhiteSpace size="lg" />

                <Button type="primary" onClick={this.forgetBtn}>确认</Button>
            </WingBlank>
        )
    }
}

function mapStateToProps(state) {
    return { forgetPas: state.forgetPas };
}

const forgetPasPage = connect(mapStateToProps)(ForgerPas);
export default forgetPasPage;