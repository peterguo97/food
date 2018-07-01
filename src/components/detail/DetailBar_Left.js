import React from 'react';
import style from './css/detail.css';
import Boxlist from './List';
import { connect } from 'dva';
import axios from 'axios';

class DetailBarLeft extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            data: [],
            arr: []
        }
    }
    handleClick(item){
        this.props.dispatch({
            type: 'handlestyle/change',
            payload: item
        })
        let dom = this.refs.active;
        let arr = this.state.arr;
        if( item === 0 ){
            dom.scrollTop = 0;
        }
        else{
            dom.scrollTop = arr[item-1];
        }
    }
    
    findIndex( target ){
        let i=0;
        let arr = this.state.arr;
        for ( i = 0; i < arr.length - 1 ; i++) {
                if(target >= ( arr[i] - 200 ) && target <= arr[i+1] - 200){
                    return i+1;
                }
        }
        return 0;
    }

    handleChange(e){
        //console.log(e.target.scrollTop)
        let index = this.findIndex(e.target.scrollTop);
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
        axios.post(`/api/stores/${this.state.id}`, {
            id: this.state.id
        }).then((response)=>{
            if(! Array.isArray(response.data)){
                throw new TypeError("data must be array !");
            }
            return response.data;
        }).then((mydata)=>{
            this.setState({
                data: mydata
            })
            const node = this.refs.active;
            let temp = 0;
            node.addEventListener('scroll',this.handleChange.bind(this));
            if(this.state.data.length){
                let myarr = [];
                this.state.data.forEach( (item, index)=>{
                    let height = temp + 50 + 120 * item.shoplist.length;
                    temp = height;
                    //console.log(height)
                    myarr.push(height);
                })
                this.setState({
                    arr: myarr
                })
            }
        }).catch(err => console.log(err));
    }
    
    componentWillUnmount = () => {
        this.refs.active.removeEventListener('scroll',this.handleChange.bind(this));
    }
    
    render(){
        let Tab_left = this.state.data.map( (item,index) => {
            if(this.props.active === index ){
                return <Boxitem getIndex={this.handleClick.bind(this)} title={item.title} active='true' key={index} it={index}/>
            }
            else{
                return <Boxitem getIndex={this.handleClick.bind(this)} title={item.title} active='false' key={index} it={index}/>
            }
        })
        return(
            <div className={style.wrapper}>
                <div className={style.box}>        
                    <div className={style.box_left}>
                        <div className={style.wrap}>
                            {Tab_left}
                        </div>   
                    </div>
                    <div ref="active" className={style.box_right}>
                        <div className={style.wrap}>
                            <Boxlist tabs={this.state.data}/>
                        </div>  
                    </div>  
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({handlestyle})=> {
    return { active: handlestyle.active }
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
