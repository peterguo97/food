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
        // console.log(nextProps);
        this.setState({
            message: nextProps.goodsdata
        })
    }
    
    render(){
        const message = this.state.message;
        let imgItems = '';
        if(message.imgs) {
            imgItems = message.imgs.map(img => 
                <img src={img.img} alt={img.img} key={img.img} width="30%" height="90"/>
            )
        }
        
        
        
        return(
            <div className={style.shopbox}>
                <h3 className={style.title}>商品名称：{message.name}</h3>
                <p>商品介绍：{message.abstract}</p>
                <p>商品价格： {message.price}</p>
                <div className={style.img}>
                    <p>图片展示：</p>
                    {
                        imgItems
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({shoplist}) {
    return {goodsdata: shoplist.goodsdata};
}

export default connect(mapStateToProps)(GoodsDetail);