import React, { Component } from "react";
import My from './my/Account';
import TabBar from "./TabBar";
import find from '../assets/find.svg';
import userSelect from '../assets/user-select.svg';
import home from '../assets/home.svg';

class User extends Component {
    constructor() {
		super();
		this.state = {
            all: {
                home: home,
                find: find,
                user: userSelect,
                page: '/user',
            }
		}
	}
	render() {
		return(
			<div>
				<My />
                <TabBar all={this.state.all}/>
			</div>
		)
	}
}

export default User;