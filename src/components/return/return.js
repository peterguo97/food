import React, { Component } from 'react';
import { Icon } from "antd-mobile";
import { Link } from 'dva/router';

class Return extends Component {
    render() {
        const { page } = this.props;
        const oDiv = {
            backgroundColor: 'rgb(18,149,209)',
            height: 40,
            marginBottom: 10
        };
        const oIcon = {
            color: '#fff'
        }
        return(
            <div style={oDiv}>
                <Link to={page}>
                    <Icon type="left" size="lg" style={oIcon}/>
                </Link>
            </div>
        )
    }
}


export default Return;