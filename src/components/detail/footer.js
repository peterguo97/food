import React from 'react'
import style from './css/detail.css';
import { connect } from 'dva';
import shopcar from '../../assets/shopcar.jpg';
import BoxItem from './BoxItem';

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

    componentWillReceiveProps(nextProps) {
        let list = nextProps.list;
        let tempprice = 0;
        list.forEach( (item)=>{
            tempprice += item.price * item.num;
        })    
        this.setState({
            price: tempprice,
        })   
        if(this.state.isShow !== nextProps.showlist){
            this.setState({
                isShow: nextProps.showlist,
            })
        } 
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
                    <div className={style.footer_right}>
                        <div>
                            加入购物车
                        </div>
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