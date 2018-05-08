import React from 'react';
import style from './css/item.css';
import { connect } from 'dva';
import plus from '../../assets/plus.png';
import decrease from '../../assets/decrease.png';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0,
        }
    }
    handlePlus(){
        const data = this.props.data;
        this.props.dispatch({
            type: 'shoplist/addTolist',
            payload: {
                name: data.name,
                price: data.price,
                num: data.num
            }
        })
    }

    handleDecrease(){
        const data = this.props.data;
        this.props.dispatch({
            type: 'shoplist/decreaseFromlist',
            payload: {
                name: data.name,
                price: data.price,
                num: data.num
            }
        })
    }

    render(){
        let data = this.props.data;
        
        return(
            <div className={style.listItem}>             
                <div className={style.list_title}>{data.name}</div>
                <div className={style.list_price}>¥{data.price*data.num}</div>
                <div className={style.detail_button}>
                    <div className={style.decrease} onClick={this.handleDecrease.bind(this)}>
                        <img src={decrease} alt="-"/>
                    </div>
                    <div className={style.num}>
                        <span>{data.num}</span>
                    </div>
                    <div className={style.plus} onClick={this.handlePlus.bind(this)}>
                        <img src={plus} alt="+"/>
                    </div>
                </div>
            </div>
                
            
        )
    }
}

const mapStateToProps = ({shoplist})=>{
    return {}
}

export default connect(mapStateToProps)(ListItem)