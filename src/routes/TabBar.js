import React, { Component } from "react";
import { Flex } from "antd-mobile";
import { Link } from "dva/router";
import styles from './TabBar.css';

class TabBar extends Component {
	render() {
        const { home, find, user } = this.props.all;        
		return(
			<Flex className={styles.tab}>
				<Flex.Item className="Item">
                    <Link to="/">
                        <figure>
                            <img src={home} alt="home" />
                            <figcaption>我的</figcaption>
                        </figure>
                    </Link>
				</Flex.Item>
				<Flex.Item className="Item">
                    <Link to="find">
                        <figure>
                            <img src={find} alt="find" />
                            <figcaption>发现</figcaption>
					    </figure>
                    </Link>
                </Flex.Item>
				<Flex.Item className="Item">
                    <Link to="user">
                        <figure>
                            <img src={user} alt="user" />
                            <figcaption>我的</figcaption>
					    </figure>
                    </Link>
                </Flex.Item>
			</Flex>
		)
	}
}

export default TabBar;