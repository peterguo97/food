import React from 'react';
import { Link } from 'dva/router';
import { List } from 'antd-mobile';

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
                    thumb={val.img}
                >                                       
                        <Brief>{val.name}</Brief>                           
                </Item>
            </Link>
        )
    }
}

export default IndexListItem;