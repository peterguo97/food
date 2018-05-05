import { List } from 'antd-mobile';
import React from 'react'
import style from './css/item.css';
import food from "../../assets/dog.jpg";
import plus from '../../assets/plus.png';
import decrease from '../../assets/decrease.png';

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
                    {
                        item.shoplist.map((item1,index)=>{
                            return(
                                <div key={index}>
                                    <Item thumb={food} className={style.item}>
                                        <ListItem data={item1}/>
                                    </Item>
                                </div>
                            )
                        })
                    }
                        
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

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    handlePlus(){
        let recentlynum = this.state.num + 1;
        this.setState({
            num: recentlynum
        })
    }

    handleDecrease(){
        if(this.state.num === 0){
            return
        }
        let recentlynum = this.state.num - 1;
        this.setState({
            num: recentlynum
        })
    }
    render(){
        const item1 = this.props.data;
        return(
            <div className={style.detail}>
                <div className={style.title}>{item1.title}</div>
                <div className={style.sale}>月售{item1.sale}份</div>
                <div className={style.price}>
                    <span>¥{item1.price}</span>
                    <span className={style.detailbutton}>
                        <div className={style.decrease} onClick={this.handleDecrease.bind(this)}>
                            <img src={decrease} alt="-"/>
                        </div>
                        <div className={style.num}>
                            <span>{this.state.num}</span>
                        </div>
                        <div className={style.plus} onClick={this.handlePlus.bind(this)}>
                            <img src={plus} alt="+"/>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}
