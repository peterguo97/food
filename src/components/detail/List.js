import { List } from 'antd-mobile';
import React from 'react'
import style from './css/item.css';
import ReactDOM from 'react-dom';

const Item = List.Item;
let starty= 0;
let endy = 0;
let page_height = 0;
export default class BoxList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_height : 0,
        }
    }
    handleChangebegin(e){
        starty = e.targetTouches[0].pageY;
    }
    handleChangemove(e){
        endy = e.targetTouches[0].pageY;
    }
    handleChangeend(){

        let move = starty - endy;
        let height = this.state.current_height + move;
        if(height < 0){
            this.setState({
                current_height: 0
            })
        }
        else if( height > 240){
            this.setState({
                current_height: 240
            })
        }
        else{
            this.setState({
                current_height: height
            })
        }
        console.log(this.state.current_height);
    }
    handleChange(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
    }
   
    render() {
        const tabs = this.props.tabs;
        const list = tabs.map((item, index) => {
                return(
                    <List key={index} renderHeader={() => <div className={style.itemtitle}>{item.title}</div>}>
                        <Item extra={'extra content'} className={style.item}>Title</Item>
                    </List>
                )
        })
            return (
                <div ref="active">
                    {list}
                </div>);
    }
}
