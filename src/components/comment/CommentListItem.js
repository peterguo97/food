import React from 'react';
import style from './css/comment.css';

class CommentListItem extends React.Component {
    
    render(){
        const data = this.props.data;
        return(
            <div>
                <div className={style.itemName}>{data.name}</div>
                <div className={style.itemDescription}>{data.description}</div>
                <div className={style.item}>{data.comment}</div>
            </div>
        )
    }
} 

export default CommentListItem;