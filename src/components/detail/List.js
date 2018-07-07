import { List } from 'antd-mobile';
import React from 'react';
import style from './css/item.css';
import ListItemRight from './ListItemRight';
import Model from './Model';
import { connect } from "dva";
import axios from 'axios';

const Item = List.Item;

class BoxList extends React.Component {

    handleClick = (id) => {
        axios.post(`/api/goods/detail/${id}`,{
            payment: id
        }).then((message)=>{
            let content = message.data;
            const state = this.props.isModal;
            this.props.dispatch({type: 'modal/save', payload: {isModal: !state, content: content}});
        })
           
    }
    render() {
        const tabs = this.props.tabs;
        const state = this.props.isModal;
        
        const list = tabs.map((item, index) => {
                return(
                    <List key={index} renderHeader={() => <div className={style.itemtitle}>{item.title}</div>}>
                    {
                        item.shoplist.map((item1,index)=>{
                            return(
                                <div key={index}>
                                    <Item thumb={<div onClick={this.handleClick.bind(this, item1.id)}><img src={item1.img} alt="detail" /></div>} className={style.item}>
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
                {state === true && <Model modal1={state}/>}
            </div>
            );
    }
}

const mapStateToProps = ({modal}) => {
    return {
        isModal: modal.isModal,
    }
}

export default connect(mapStateToProps)(BoxList);

