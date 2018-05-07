import React from 'react'
import style from './css/item.css';
import plus from '../../assets/plus.png';
import decrease from '../../assets/decrease.png';
import { connect } from 'dva';

class ListItemRight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    handlePlus(){
        const data = this.props.data;
        console.log(this.props);
        let recentlynum = this.state.num + 1;
        this.setState({
            num: recentlynum
        })
        this.props.dispatch({
            type: 'shoplist/addTolist',
            payload: {
                name: data.title,
                price: data.price,
                num: data.num
            }
        })
    }

    handleDecrease(){
        const data = this.props.data;
        if(this.state.num === 0){
            return
        }
        let recentlynum = this.state.num - 1;
        this.setState({
            num: recentlynum
        })
        this.props.dispatch({
            type: 'shoplist/decreaseFromlist',
            payload: {
                name: data.title,
                price: data.price,
                num: data.num
            }
        })
    }
    render(){
        const item1 = this.props.data;
        return(
            <div className={style.detail}>
                <div className={style.title}>{item1.title}</div>
                <div className={style.sale}>月售{item1.sale}份</div>
                <div className={style.price}>
                    <span>¥{item1.price}</span>
                    <span className={style.detailbutton}>
                        <div className={style.decrease} onClick={this.handleDecrease.bind(this)}>
                            <img src={decrease} alt="-"/>
                        </div>
                        <div className={style.num}>
                            <span>{this.state.num}</span>
                        </div>
                        <div className={style.plus} onClick={this.handlePlus.bind(this)}>
                            <img src={plus} alt="+"/>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({shoplist}) => {
    return {}
}
export default connect(mapStateToProps)(ListItemRight);