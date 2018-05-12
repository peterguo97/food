import React, { Component } from "react";
import { WhiteSpace, WingBlank } from "antd-mobile";
class Aboutus extends Component {
    render() {
        const styles = {
            backgroundColor: '#fff',
            padding: '15px 10px',
            fontSize: '16px'
        }
        return (
            <WingBlank>
                <WhiteSpace />
                <div style={styles}>我们公司是一个XXX公司，公司....ddd</div>
            </WingBlank>
            // <div style={styles}>
            //     我们公司是一个XXX公司，公司....ddd
            //     dffds
            // </div>
        )
    }
}

export default Aboutus;