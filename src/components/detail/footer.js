import React from 'react'
import style from './css/detail.css';
import { Toast } from 'antd-mobile';
import { connect } from 'dva';
import shopcar from '../../assets/shopcar.jpg';
import BoxItem from './BoxItem';
import axios from 'axios';
import { Link } from 'dva/router';

class ListFooter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            price: 0,
            isShow: props.showlist
        }
    }

    handleClick(){
        let list = this.props.list;
        if(list.length === 0){
            return
        }
        this.props.dispatch({
            type: 'shoplist/showOrNotShow'
        })
    }

    handleList(){
        let list = this.props.list;
        console.log(list);
        let arr = [];
        list.forEach((item)=>{
            let obj={};
            obj.id = item.id;
            obj.num = item.num;
            arr.push(obj);
        })
        axios.post("/payment/store",{
            list: arr
        }).then((response)=>{
            if(response.status >= 200 && response.status <= 300){
                Toast.success('下单成功!', 1);
            }
        }).catch((err)=>{
            console.log(err);
            Toast.fail('下单失败!',1);
        })
    }
    
    addList(){
        let list = this.props.list;
        let arr = [];
        list.forEach((item)=>{
            let obj={};
            obj.id = item.id;
            obj.num = item.num;
            arr.push(obj);
        })
        axios.post("/shopcart/store",{
            list: arr
        }).then((response)=>{
            if(response.status >= 200 && response.status <= 300){
                Toast.success('已加入购物车!', 1);
            }
        }).catch((err)=>{
            console.log(err);
            Toast.fail('加入购物车失败!',1);
        })
    }

    getPrice(arr){
        let tempprice = 0;
        arr.forEach( (item)=>{
            tempprice += item.price * item.num;
        })
        return tempprice;  
    }

    componentWillReceiveProps(nextProps) {
        let list = nextProps.list;
        let  tempprice = this.getPrice(list);
        this.setState({
            price: tempprice,
        })   
        if(this.state.isShow !== nextProps.showlist){
            this.setState({
                isShow: nextProps.showlist,
            })
        } 
    }
    
    componentDidMount() {
        let list = this.props.list;
        if(!list.length){
            return;
        }
        let tempprice = this.getPrice(list);
        this.setState({
            price: tempprice
        })   
    }
    

    render(){
        return(
            <div className={style.foot} style={{display: this.props.isShow ? "block" : "none" }}>
                <div className={style.footeritem} style={{display: this.state.isShow ? "block" : "none" }}>
                    <div className={style.buycar}>购物车</div>
                    <BoxItem />
                </div>
                <div className={style.footer}>
                    <div className={style.footer_left} onClick={this.handleClick.bind(this)}>
                        <div className={style.footer_circle}>
                            <img src={shopcar} alt="小车车" />
                        </div>
                    </div>
                    <div className={style.footer_middle} onClick={this.handleClick.bind(this)}>
                        <div>￥{this.state.price}</div>
                    </div>
                    <div className={style.footer_middle_right} onClick={this.addList.bind(this)}>
                        加入购物车
                    </div>
                    <div className={style.footer_right} onClick={this.handleList.bind(this)}>
                        <Link to='/shopping'>
                            <div style={{color: '#fff'}}>
                                立即购买
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({shoplist}) => {
    return {
        showlist: shoplist.showlist,
        list: shoplist.list
    }
}

export default connect(mapStateToProps)(ListFooter);