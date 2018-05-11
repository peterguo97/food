import React from 'react';
import CommentListItem from './CommentListItem';
import style from './css/comment.css';

const data = [
    { id:12342553,name: 'John', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:12342523,name: 'Lily', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:1234255453,name: 'dian', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:12342552233,name: 'petter', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:1234251253,name: 'pig', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:1234253453,name: 'zhuzhu', description: '真的好吃，狗狗很爱' ,comment:4.5},
    { id:12342123553,name: 'hellokity', description: '真的好吃，狗狗很爱' ,comment:4.5},
]


class Comment extends React.Component {
    render(){
        let list = data.map((item,index)=>{
            return(
                <div className={style.listItem}>
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