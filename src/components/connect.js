import React from 'react';
import contact from '../assets/contact.jpg';

class Connect extends React.Component {
    render(){
        return(
            <div style={ {width: '100%', marginTop: '10px'}}>
                <img src={contact} width="100%" alt="测试二维码"/>
            </div>
        )
    }
}

export default Connect;