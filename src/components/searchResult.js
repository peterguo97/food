import React from 'react';
import normal from './css/basic.css';
import DiscoverListItem from './DiscoverListItem';
import back from '../assets/back.png';
import { Link } from 'dva/router';
import axios from 'axios';

class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.match.params.value,
            message: ''
        }
    }

    componentDidMount() {
        console.log(this.state.data);
        axios.post('/api/goods/search', {payload: this.state.data }).then((message) => {
            this.setState({
                message: message.data
            })
        })
    }
    

    render(){
        const message = this.state.message;
        console.log(message);
        
        let listItem = '';
        if(message) {
            listItem =  <div className={normal.discoverlist}>
                    {
                        message.map(function(value,index) {
                            return (
                                <div key={index} className={normal.discoverWrap}>
                                    <DiscoverListItem data={value}/>
                                </div>
                            )
                        }, this)
                    }
                </div>
        }
        
        return(
            <div className={normal.Wrapper}>
                <Link to="/">
                    <div className={normal.back}>
                        <img src={back} alt="返回"/> <span>搜索</span>
                    </div>
                </Link>
                <p style={{
                    textAlign: 'center'
                }}>搜索结果</p>
                { listItem !== '' && listItem }
            </div>
        )
    }
}

export default SearchResult;