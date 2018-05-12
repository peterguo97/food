import React from 'react';
import { List} from 'antd-mobile';
import normal from './css/basic.css';
import IndexListitem from './IndexListItem';
import back from '../assets/back.png';
import { Link } from 'dva/router';

const data = [{id: '1',name: '点点饲料'},{id:'2',name:'点点最爱'}];

class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.match.params.value
        }
    }

    
    componentDidMount() {
        console.log(this.state.data);
    }
    

    render(){
        return(
            <div className={normal.Wrapper}>
                <Link to="/">
                    <div className={normal.back}>
                    <img src={back} alt="返回"/> <span>搜索</span>
                    </div>
                </Link>
                <List renderHeader={() => '搜索结果'} className={normal.list}>
                    {
                        data.map(function(value) {
                            const str = value.id + value.name;
                            return (
                                <div key={str}>
                                <IndexListitem data={value}/>
                                </div>
                            )
                        }, this)
                    }
                </List>
            </div>
        )
    }
}

export default SearchResult;