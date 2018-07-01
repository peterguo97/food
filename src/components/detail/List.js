import { List } from 'antd-mobile';
import React from 'react';
import style from './css/item.css';
import ListItemRight from './ListItemRight';

const Item = List.Item;

class BoxList extends React.Component {  
    render() {
        const tabs = this.props.tabs;
        const list = tabs.map((item, index) => {
                return(
                    <List key={index} renderHeader={() => <div className={style.itemtitle}>{item.title}</div>}>
                    {
                        item.shoplist.map((item1,index)=>{
                            return(
                                <div key={index}>
                                    <Item thumb={item1.img} className={style.item}>
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

