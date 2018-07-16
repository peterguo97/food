import React from 'react';
import { List, WingBlank } from 'antd-mobile';
import shopImg from '../assets/logo.jpg';
import normal from './css/basic.css';
import IndexListitem from './IndexListItem';
import axios from 'axios';

class ShopList extends React.Component {
    state = {
        disabled: false,
        data : [{id:1,name:'爱畜牧', img: shopImg}]
    }

    componentDidMount(){
        axios.get('/api/stores').then((res)=>{
            let mydata = res.data;
            if(!Array.isArray(mydata)){
                throw new Error("请传入数组");
            }
            this.setState({
                data: mydata
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <WingBlank>
                <List renderHeader={() => '商家列表'} className={normal.list}>
                    {
                        this.state.data.map(function(value,index) {
                            return (
                                <div key={index}>
                                    <IndexListitem data={value}/>
                                </div>
                            )
                        }, this)
                    }
                </List>
            </WingBlank>
        );
    }
}

export default ShopList;
