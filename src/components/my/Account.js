import React, { Component } from 'react';
import User from './User';
import UserInfo from './UserInfo';
import Merchanat from './Merchant';

class Account extends Component {
    render() {
        return(
            <div>
                <User />
                <UserInfo />
                <Merchanat />
            </div>
        );
    }
}

export default Account;