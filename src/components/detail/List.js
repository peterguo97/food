import { List } from 'antd-mobile';
import React from 'react';
import style from './css/item.css';
import ListItemRight from './ListItemRight';

const Item = List.Item;

class BoxList extends React.Component {
    state = {
        show: false
    }
    handleClick = () => {
        let show = this.state.show;
        this.setState({
            show: !show
        })
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
                                    <Item thumb={<div onClick={this.handleClick.bind(this)}><img src={item1.img} alt="detail" /></div>} className={style.item}>
                                        <ListItemRight data={item1}/>
                                    </Item>
                                </div>
                            )
                        })
                    }
                        
                    </List>
                )
        })
        return (
            <div>
                {list}
            </div>
            );
    }
}


export default BoxList;

