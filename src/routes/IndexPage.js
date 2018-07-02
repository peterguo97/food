import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Nav from '../components/Nav';
import Nav1 from '../components/Nav1';
import Search from '../components/Search';
import ShopList from '../components/ShopList';
import user from '../assets/user.svg';
import find from '../assets/find.svg';
import homeSelect from '../assets/home-select.svg';
import TabBar from "./TabBar";

class TabBarExample extends React.Component {
    constructor() {
		super();
		this.state = {
			all: {
				home: homeSelect,
				find: find,
				user: user
			}
		}
	}
	render() {
		return(
			<div className={styles.normal}>
				<Search history={this.props.history} />    
				<Nav />
				<Nav1 />
				<ShopList/>
				<TabBar all={this.state.all}/>
			</div>
		)
	}
}

export default connect()(TabBarExample);
