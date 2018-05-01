import { List } from 'antd-mobile';
import React from 'react'
import style from './css/item.css';
import ReactDOM from 'react-dom';

const Item = List.Item;

export default class BoxList extends React.Component {
    handleChange(e){
        console.log(e);
        let a = document.documentElement.scrollTop;  
        console.log("滑动距离为：",a);  
    }
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this.refs.active);
        console.log(node);
        node.addEventListener('touchmove',this.handleChange);
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
