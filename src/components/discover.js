import React from 'react';
import normal from './css/basic.css';
import DiscoverListitem from './DiscoverListItem';
import axios from 'axios';
class Discover extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount = () => {
      axios.get('/gofun').then((message)=>{
          this.setState({
              data: message.data
          })
      })
    }
    
    render(){
        let data = this.state.data;
        return(
            <div className={normal.Wrapper}>
                <div className={normal.back}>
                    <span style={{padding: '8px'}}>发现</span>
                </div>
                <div  className={normal.discoverlist}>
                    {
                        data.map(function(value,index) {
                            return (
                                <div key={index} className={normal.discoverWrap}>
                                    <DiscoverListitem data={value}/>
                                </div>
                            )
                        }, this)
                    }
                </div>
            </div>
        )
    }
}

export default Discover;