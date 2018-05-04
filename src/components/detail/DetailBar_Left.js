import { WhiteSpace } from 'antd-mobile';
import React from 'react';
import style from './css/detail.css';
import Boxlist from './List';
import { connect } from 'dva';

const tabs = [
    { title: '狗狗最爱',shoplist: [
        {title: '海澜之家', sale: 100, price: 150},
        {title: '美汁源', sale: 60, price: 150},
        {title: '点点之家', sale: 70, price: 150},
        {title: '好丽友', sale: 80, price: 150},
        {title: '爱上狗粮', sale: 120, price: 150},
    ]},
    { title: '每单必点',shoplist: [
        {title: '海澜之家', sale: 100, price: 150},
        {title: '美汁源', sale: 60, price: 150},
        {title: '点点之家', sale: 70, price: 150},
        {title: '好丽友', sale: 80, price: 150},
        {title: '爱上狗粮', sale: 120, price: 150},
    ] },
    { title: '促销折扣',shoplist: [
        {title: '海澜之家', sale: 100, price: 150},
        {title: '美汁源', sale: 60, price: 150},
        {title: '点点之家', sale: 70, price: 150},
        {title: '好丽友', sale: 80, price: 150},
        {title: '爱上狗粮', sale: 120, price: 150},
    ] },
];

const arr = [];

class DetailBarLeft extends React.Component {

    handleClick(item){
        this.props.dispatch({
            type: 'handlestyle/change',
            payload: item
        })
    }
    
    findIndex( target ){
        let i=0;
        for ( i = 0; i < arr.length - 1 ; i++) {
                if(target >= ( arr[i] - 150 ) && target <= arr[i+1] ){
                    return i+1;
                }
        }
        return 0;
    }

    handleChange(e){
        console.log(typeof(e.target.scrollTop));
        console.log(e.target.scrollTop)
        let index = this.findIndex(e.target.scrollTop);
        console.log(index);
        if(this.props.active === index){
            return
        }
        else{
            this.props.dispatch({
                type: 'handlestyle/change',
                payload: index
            })
        }
    }

    componentDidMount() {
        const node = this.refs.active;
        let temp = 0;
        node.addEventListener('scroll',this.handleChange.bind(this));
        tabs.forEach( (item, index)=>{
            let height = temp + 50 + 120 * item.shoplist.length;
            temp = height;
            //console.log(height)
            arr.push(height);
        })
    }
    
    componentWillUnmount = () => {
        this.refs.active.removeEventListener('scroll',this.handleChange.bind(this));   
    }
    
    render(){
        const Tab_left = tabs.map( (item,index) => {
            if(this.props.active === index ){
                return <Boxitem getIndex={this.handleClick.bind(this)} title={item.title} active='true' key={index} it={index}/>
            }
            else{
                return <Boxitem getIndex={this.handleClick.bind(this)} title={item.title} active='false' key={index} it={index}/>
            }
        })
        return(
            <div className={style.box}>
                <WhiteSpace />        
                <div className={style.box_left}>
                    <div className={style.wrap}>
                        {Tab_left}
                    </div>   
                </div>
                <div ref="active" className={style.box_right}>
                    <div className={style.wrap}>
                        <Boxlist tabs={tabs}/>
                    </div>  
                </div>  
            </div>
        )
    }
}

const mapStateToProps = ({handlestyle})=> {
    return {active: handlestyle.active}
}

export default connect(mapStateToProps)(DetailBarLeft)

class Boxitem extends React.Component {
    handleClick(){
        if(this.props.getIndex){
            this.props.getIndex(this.props.it);
        }
    }
    render(){
        if(this.props.active === 'true'){
            return(
                <div className={style.active} onClick={this.handleClick.bind(this)}>{this.props.title}</div>
            )
        }
        else{
            return(
                <div className={style.box_left_item} onClick={this.handleClick.bind(this)}>{this.props.title}</div>
            )
        }
    }
}
