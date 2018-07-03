import React from 'react';
import style from './css/shopUser.css';

const data = {name: '山西碧望生物有限公司', phone: [13833490189,13614849293], address: '保定市长城北大街2186号', openTime: '7:00 - 12:00'};

class ShopDetail extends React.Component {
    render(){
        return(
            <div className={style.shopbox}>
                <div className={style.shopItemDetail}><span>商家信息 :</span><span>{data.name}</span></div>
                <div className={style.shopItemPhone}><span>商家电话 :</span>
                    <div>
                        <p>{data.phone[0]}</p>
                        <p>{data.phone[1]}</p> 
                    </div>
                </div>
                <div className={style.shopItemDetail}><span>地址 :</span><span>{data.address}</span></div>
                <div className={style.shopItemDetail}><span>营业时间 :</span><span>{data.openTime}</span></div>
            </div>
        )
    }
}

export default ShopDetail;