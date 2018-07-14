import { List, Toast } from 'antd-mobile';
import React from 'react';
import style from './css/item.css';
import ListItemRight from './ListItemRight';
import axios from 'axios';
import { connect } from 'dva';


const Item = List.Item;

class BoxList extends React.Component {
    handleClick = (id) => {
        axios.post(`/api/goods/detail/${id}`,{
            payment: id
        }).then((message)=>{
            this.props.dispatch({type: 'shoplist/changePage',payload: {page: 1}});
            this.props.dispatch({type: 'shoplist/goodsDetail', payload: {data: message.data}});
        }).catch((e)=>{
            if(e){
                Toast.fail('请求数据失败',1);
            }
        })
    }

    render() {
        const tabs = this.props.tabs;     
        const list = tabs.map((item, index) => {
                return(
                    <List key={index} className={style.list} renderHeader={() => <div className={style.itemtitle}>{item.title}</div>}>
                    {
                        item.shoplist.map((item1,index)=>{
                            return(
                                <div key={index} onClick={this.handleClick.bind(this, item1.id)}>
                                    <Item thumb={<div ><img src={item1.img} alt="detail" /></div>} className={style.item}>
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

const mapStateToProps = ({shoplist}) => {
    return {list: shoplist.list};
}
export default connect(mapStateToProps)(BoxList);