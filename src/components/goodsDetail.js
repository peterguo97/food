import React from 'react';
import style from './css/shopUser.css';
import { connect } from 'dva';
import axios from 'axios';

class GoodsDetail extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           message: {name: 'hello',abstract: 'test'}
       }
   }
    componentDidMount() {
        axios.post('/api/goods/detail/5',{payment: 5}).then((mes)=>{
            let data = mes.data;
            this.setState({
                message: data
            })
        })
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log(nextProps);
        this.setState({
            message: nextProps.goodsdata
        })
    }
    
    render(){
        const message = this.state.message;
        console.log(this.state.message);
        return(
            <div className={style.shopbox}>
                <p className={style.title}>商品名称：{message.name}</p>
                <p>商品介绍：{message.abstract}</p>
                <p>图片：</p>
            </div>
        )
    }
}

function mapStateToProps({shoplist}) {
    return {goodsdata: shoplist.goodsdata};
}

export default connect(mapStateToProps)(GoodsDetail);