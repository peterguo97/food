import React from 'react';
import style from './css/comment.css';
import man from '../../assets/man.png';
import woman from '../../assets/woman.png';
class CommentListItem extends React.Component {
    
    render(){
        const data = this.props.data;
        return(
            <div className={style.listItem}>
                <div className={style.left}>
                    <div className={style.itemName}><img src={ data.sex === 'woman' ? woman : man } alt="user"/>{data.name}</div>
                    <div className={style.itemDescription}>{data.description}</div>
                </div>
                <div className={style.item}>
                    <div style={{fontWeight: 'bold'}}>用户评分</div>
                    <div style={{fontSize:'14px', color: 'red',fontWeight:'bold'}}>{data.comment}</div>
                </div>
            </div>
        )
    }
} 

export default CommentListItem;