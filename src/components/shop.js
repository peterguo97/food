import React from 'react';
import style from './css/shopUser.css';

const data = {name: '川味佳', phone: 'xxxxxxxx', address: '天涯海角', openTime: '7:00 - 12:00'};

class ShopDetail extends React.Component {
    render(){
        return(
            <div className={style.shopbox}>
                <div className={style.shopItemDetail}><span>商家信息 :</span><span>{data.name}</span></div>
                <div className={style.shopItemDetail}><span>商家电话 :</span><span>{data.phone}</span></div>
                <div className={style.shopItemDetail}><span>地址 :</span><span>{data.address}</span></div>
                <div className={style.shopItemDetail}><span>营业时间 :</span><span>{data.openTime}</span></div>
            </div>
        )
    }
}

export default ShopDetail;