import { List } from 'antd-mobile';
import React from 'react'
import style from './css/item.css';

const Item = List.Item;
const Brief = Item.Brief;

export default class BoxList extends React.Component {
    // componentDidMount(){
    //     let dom = ReactDOM.findDOMNode(this.refs.active);
    //     console.log(dom.scrollTop);
    // }
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
                <div>
                    {list}
                </div>);
    }
}
