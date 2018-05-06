import React from 'react';
import style from './css/detail.css';
import img_title from '../assets/yay.jpg';
import back from '../assets/back.jpg';
import { Link } from 'dva/router';
import DetailBar from './detail/DetailBar.js';

class Detail extends React.Component {
    render(){
        return(
            <div>
                <div className={style.detail_head}>
                    <div className={style.wrap}>
                        <div className={style.titleimg}>
                            <img src={img_title} alt="shop" />
                        </div>
                        <div className={style.mid}>
                            <div style={{color: '#fff', fontWeight: 'bold' ,fontSize: 16}}>宠物狗饲料</div>
                            <div style={{ color: '#fff', fontSize: 12, marginTop: 10 }}>蜂鸟专送/极速送达</div>
                            <div style={{ color: '#fff', fontSize: 12, marginTop: 10 }}>在线支付满xx减xx</div>
                        </div>
                        <div className={style.backimg}>
                            <div style={{width: 40, height: 40, borderRadius: 20, background: '#fff'}}>
                                <Link to="/" ><img src={back} alt='back' /></Link>
                            </div>
                        </div>
                    </div>
                </div>               
                <DetailBar/>
            </div>
        )
    }
}

export default Detail;