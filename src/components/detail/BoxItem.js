import React from 'react';
import style from './css/item.css';
import { connect } from 'dva';
import ListItem from './ListItem';

class BoxItem extends React.Component {
    render(){
        const data = this.props.list;
        let list = data.map((item,index)=>{
            return <ListItem data={item} key={index} />
        })
        return(
            <div className={style.footeritem}>
                {list}
            </div>
        )
    }
}

const mapStateToProps = ({shoplist})=> {
    return {
        list: shoplist.list
    }
}

export default connect(mapStateToProps)(BoxItem);