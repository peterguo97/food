import { List } from 'antd-mobile';
import React from 'react'
import style from './css/item.css';
import food from "../../assets/dog.jpg";
import button from '../../assets/button.jpg';

const Item = List.Item;

export default class BoxList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_height : 0,
        }
    }
    
    render() {
        const tabs = this.props.tabs;
        const list = tabs.map((item, index) => {
                return(
                    <List key={index} renderHeader={() => <div className={style.itemtitle}>{item.title}</div>}>
                        <Item thumb={food} className={style.item}>
                           <div className={style.detail}>
                                <div className={style.title}>狗狗最爱</div>
                                <div className={style.sale}>月售xx份</div>
                                <div className={style.price}>
                                    <span>¥10</span>
                                    <span className={style.detailbutton}>
                                        <img src={button} alt=""/>
                                    </span>
                                </div>
                            </div>
                        </Item>
                    </List>
                )
        })
        return (
            <div ref="active">
                {list}
            </div>
            );
    }
}
