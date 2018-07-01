import React from 'react';
import yison from '../assets/yison.png';

class Connect extends React.Component {
    render(){
        return(
            <div style={ {width: '100%', marginTop: '10px'}}>
                <img src={yison} width="100%" alt="测试二维码"/>
            </div>
        )
    }
}

export default Connect;