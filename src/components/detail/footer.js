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
        }
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
    }
    

    render(){
       
        return(
            <div className={style.foot}>
                <div className={style.footeritem}>
                    <BoxItem /> 
                </div>
                <div className={style.footer}>
                    <div className={style.footer_left}>
                        <div className={style.footer_circle}>
                            <img src={shopcar} alt="小车车" />
                        </div>
                    </div>
                    <div className={style.footer_middle}>
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
        list: shoplist.list
    }
}

export default connect(mapStateToProps)(ListFooter);