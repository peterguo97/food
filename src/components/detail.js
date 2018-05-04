import React from 'react';
import { List } from 'antd-mobile';
import style from './css/detail.css';
import img_title from '../assets/yay.jpg';
import back from '../assets/back.png';
import { Link } from 'dva/router';
import DetailBar from './detail/DetailBar.js';
const Item = List.Item;
const Brief = Item.Brief;


class Detail extends React.Component {
    render(){
        return(
            <div>
                <div className={style.detail_head}>
                    <Item
                        style={{background: 'rgba(38,188,213,.8)',color:'#fff',height: '100%'}}
                        thumb={img_title}
                        multipleLine="true"
                        extra={<div><Link to="/"><img src={back} alt="back"/></Link></div>}
                    >
                        <div style={{color: '#fff'}}>宠物狗饲料</div>
                        <Brief style={{ color: '#fff' }}>蜂鸟专送/极速送达</Brief>
                        <Brief style={{ color: '#fff' }}>在线支付满xx减xx</Brief>
                    </Item>
                </div>               
                <DetailBar/>
            </div>
        )
    }
}

export default Detail;