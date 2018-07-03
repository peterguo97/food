import React, { Component } from "react";
import Discover from '../components/discover';
import TabBar from "./TabBar";
import findSelect from '../assets/find-select.svg';
import user from '../assets/user.svg';
import home from '../assets/home.svg';

class Find extends Component {
    constructor() {
		super();
		this.state = {
            all: {
                home: home,
                find: findSelect,
                user: user,
                page: '/find'
            }
		}
	}
	render() {
		return(
			<div>
				<Discover />
                <TabBar all={this.state.all}/>
			</div>
		)
	}
}

export default Find;