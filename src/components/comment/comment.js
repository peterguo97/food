import React from 'react';
import CommentListItem from './CommentListItem';
import style from './css/comment.css';
import axios from 'axios';

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get(`/api/comments/${this.props.id}`)
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