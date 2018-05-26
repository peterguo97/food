import React from 'react';
import CommentListItem from './CommentListItem';
import style from './css/comment.css';
import axios from 'axios';

const data = [
    { id:12342553,name: 'John', description: '真的好吃，狗狗很爱' ,comment:4.5, sex: 'man'},
    { id:12342523,name: 'Lily', description: '真的好吃，狗狗很爱' ,comment:4.5, sex: 'woman'},
    { id:1234255453,name: 'dian', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:12342552233,name: 'petter', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:1234251253,name: 'pig', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:1234253453,name: 'zhuzhu', description: '真的好吃，狗狗很爱' ,comment:4.5, sex: 'woman'},
    { id:12342123553,name: 'hellokity', description: '真的好吃，狗狗很爱' ,comment:4.5, sex: 'woman'}
]


class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get(`comments/${this.props.id}`)
        .then((response)=>{
            if(Object.prototype.toString.call(response.data) === '[object Array]'){
                this.setState({
                    data: response.data
                })
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    
    render(){
        let list = this.state.data.map((item,index)=>{
            return(
                <div className={style.hello} key={index}>
                    <CommentListItem data={item}/>
                </div>
            )
        })
        return(
            <div className={style.listBox}>
                {list}
            </div>
        )
    }
}

export default Comment;