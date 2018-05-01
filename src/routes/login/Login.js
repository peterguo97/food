import React, { Component } from "react";
import { Flex, List, InputItem, Button, WingBlank, WhiteSpace, Toast } from "antd-mobile";
// import { createForm } from 'rc-form';
import styles from "./Login.css";
import { connect } from "dva";
// import request from '../../utils/request';

// import { Route, Link, Switch } from 'dva/router';
// import { Reginster } from "./Register";

class Login extends Component {
    userName = (event) => {
        this.props.dispatch({type: 'login/userName', payload: event});
    }

    userPassword = (event) => {
        this.props.dispatch({type: 'login/userPassword', payload: event});
    }

    vertificationCode = (event) => {
        this.props.dispatch({type: 'login/userCode', payload: event});
    }

    clickBtn = () => {
        const { user, userPassword, userCode} = this.props.login;
        if( user && userPassword && userCode) {
            this.props.dispatch({type: 'login/submit', payload: this.props.login});
        } else {
            Toast.info('你还未填完！', 1);
        }
        
    }
    // 更换验证码
    changeImg = () => {
        this.props.dispatch({type: 'login/codeImg'});
    }
    componentDidMount() {
        // request('/api/todos', {
        //     method: 'POST',
        //     body: JSON.stringify({a: 1}),
        // });
    }
    render() {
        // 一开始加载验证码
        const { img } = this.props.login;
        return(
            <WingBlank className={styles.list}>
                <List>
                    <InputItem
                        placeholder="手机号/用户名"
                        className={styles.userInput}
                        onChange={this.userName}
                        autoFocus
                    >
                        {/* <div className={styles.userIco}/> */}
                        <i className="fa fa-user" />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <InputItem
                        type="password"
                        placeholder="***"
                        onChange={ this.userPassword }
                        className={styles.userInput}
                    >
                        {/* <div className={styles.passwordIco} /> */}
                        <i className="fa fa-lock" />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item>
                            <InputItem
                                placeholder="验证码"
                                onChange={ this.vertificationCode }
                                className={styles.userInput}
                            /> 
                        </Flex.Item>
                        <Flex.Item className={styles.code}>
                            <img src={img} alt="验证码" width="70%" height="44px"/>
                            <span onClick={this.changeImg}>换一张</span>
                        </Flex.Item>
                        {/* <Flex.Item className={styles.code}>
                            <span>换一张</span> 
                        </Flex.Item> */}
                    </Flex>
                </List>
                <WhiteSpace size="lg" />
                <div>
                    <a href="/forget">忘记密码</a>
                    <a href="/register" style={{float: 'right'}}>去注册</a>
                </div>
                
                <WhiteSpace size="lg" />
                <Button className={styles.userBtn} onClick={ this.clickBtn }>登录</Button>
                <p className={styles.userOr}>OR</p>
                <div className={styles.otherLogin}>
                    <i className="fa fa-weixin" />
                </div>
            </WingBlank>
        )
    }
}

function mapStateToProps(state) {
    return { login: state.login };
}

const LoginPage = connect(mapStateToProps)(Login);
// const User = createForm()(Login);
export default LoginPage;