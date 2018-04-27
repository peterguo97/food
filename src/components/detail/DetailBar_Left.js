import { WhiteSpace } from 'antd-mobile';
import React from 'react';
import style from './css/detail.css';

const tabs = [
    { title: '狗狗最爱' },
    { title: '每单必点' },
    { title: '促销折扣' },
];
export default class DetailBarLeft extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_active: 0,
        }
    }
    
    handleClick(item){
        this.setState({
            current_active: item
        })
    }

    render(){
        const Tab_left = tabs.map( (item,index) => {
            if(this.state.current_active === index ){
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
                    {Tab_left}
                </div>
                <div className={style.box_right}></div>  
            </div>
        )
    }
} 

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
