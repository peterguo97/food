import React, { Component } from "react";
import { Steps } from "antd-mobile";
import { connect } from "dva";

const Step = Steps.Step;

class Logistics extends Component {
    render() {
        const styles = {
            paddingTop: '200px'
        };
        const log = this.props.logistics.log;
        return (
            
            <Steps direction="horizontal" style={styles} current={log}>
                <Step title="未发货"/>
                <Step title="已发货" />
                <Step title="已接收" />
            </Steps>
            
        )
    }
}

function mapStateToProps(state) {
    return { logistics: state.logistics };
}

const LogisticsState = connect(mapStateToProps)(Logistics);

export default LogisticsState;