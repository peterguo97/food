import React from 'react';
import { List } from 'antd-mobile';
import style from './css/detail.css';
import img_title from '../assets/yay.jpg';
import back from '../assets/back.png';
import { Link } from 'dva/router';
const Item = List.Item;
const Brief = Item.Brief;

class Detail extends React.Component {
    render(){
        return(
            <List className={style.detail_head} >
                <Item
                    thumb={img_title}
                    multipleLine="true"
                    extra={<div><Link to="/"><img src={back} alt="back"/></Link></div>}
                >
                    宠物狗饲料
                    <Brief>蜂鸟专送/极速送达</Brief>
                    <Brief>在线支付满xx减xx</Brief>
                </Item>
            </List>
        )
    }
}

export default Detail;