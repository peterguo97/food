import React from 'react';
import style from './css/shopUser.css';
import { connect } from 'dva';
import axios from 'axios';

class GoodsDetail extends React.Component {
    state = {
        message: this.props.message
    }
    componentDidMount() {
        axios.post(`/api/goods/detail/5`, {
          payment: 5
        }).then((message) => {
           this.setState({
               message: message
           })
        })
    }
    render(){
        const message = this.state.message;
        return(
            <div className={style.shopbox}>
                <p>商品名称：</p>
                <p>商品介绍：</p>
                <p>图片：</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {message: state.message};
}

export default connect(mapStateToProps)(GoodsDetail);