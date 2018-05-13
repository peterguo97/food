import React from 'react';
import { Link } from 'dva/router';
import { List } from 'antd-mobile';
import img from '../assets/food5.jpg';

const Item = List.Item;
const Brief = Item.Brief;

class IndexListItem extends React.Component {
    render(){
        const val = this.props.data;
        return(
            <Link to={`/${val.id}/detail`}>
                <Item                                            
                    arrow="horizontal"
                    multipleLine
                    onClick={() => { }}
                    thumb={img}
                >                                       
                        宠物饲料 <Brief>{val.name}</Brief>                                   
                </Item>
            </Link>
        )
    }
}

export default IndexListItem;