import { List } from 'antd-mobile';
import React from 'react'
import style from './css/item.css';
import food from "../../assets/dog.jpg";
import ListItemRight from './ListItemRight';

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
            <div ref="active">
                {list}
            </div>
            );
    }
}


