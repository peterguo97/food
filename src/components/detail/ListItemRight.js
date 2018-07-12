import React from 'react'
import style from './css/item.css';
import plus from '../../assets/plus.png';
import decrease from '../../assets/decrease.png';
import { connect } from 'dva';
import { hasItem } from '../../publicapi';
import { Toast } from 'antd-mobile';
class ListItemRight extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            num: 0,
        }
    }

    prevent(e) {
        e.stopPropagation();
    }
    
    handlePlus(){
        let data = this.props.data;
        let recentlynum = this.state.num + 1;

        if(recentlynum <= ( +data.max )){
            this.setState({
                num: recentlynum
            })
            this.props.dispatch({
                type: 'shoplist/addTolist',
                payload: {
                    id: data.id,
                    price: data.price,
                    num: data.num
                }
            })
        }
        else {
            Toast.fail('超过最大库存',1);
        }
    }

    handleDecrease(){
        let data = this.props.data;
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
                id: data.id,
                price: data.price,
                num: data.num
            }
        })
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const list = nextProps.list;
        const item1 = this.props.data;
        let judge = hasItem(this.props.list, this.props.data, "id");
        let judge1 = hasItem(nextProps.list, this.props.data, "id");
        if (judge && judge1) {
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if(element.id === item1.id){
                    this.setState({
                        num: element.num,
                    })
                    break;
                }
            }
        }
        if(judge && !judge1){
            this.setState({
                num: 0,
            })
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
       if(this.state.num !== nextState.num ){
           return true;
       }
       else{
           return false;
       }
    }

    componentDidMount(){
        let data = this.props.data;
        let list = this.props.list;
        if(!list.length){
            return
        }
        list.forEach((item)=>{
            if(item.id === data.id){
                this.setState({
                    num: item.num
                })
            }
        })

    }

    render(){
        const item1 = this.props.data;
        return(
            <div className={style.detail}>
                <div className={style.title}>{item1.name}</div>
                <div className={style.sale}>库存{item1.sale}份</div>
                <div className={style.price}>
                    <span>¥{item1.price}</span>
                    <span className={style.detailbutton} onClick={this.prevent}>
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
    return {list: shoplist.list};
}
export default connect(mapStateToProps)(ListItemRight);