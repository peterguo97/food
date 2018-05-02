import React, { Component } from 'react';
import User from './User';
import Address from './Address';
import Merchanat from './Merchant';

class Account extends Component {
    render() {
        return(
            <div>
                <User />
                <Address />
                <Merchanat />
            </div>
        );
    }
}

export default Account;