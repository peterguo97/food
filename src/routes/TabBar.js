import React, { Component } from "react";
import { Flex } from "antd-mobile";
import { Link } from "dva/router";
import styles from './TabBar.css';

class TabBar extends Component {
	render() {
        const { home, find, user, page, font } = this.props.all;
        let [homeSelcet, findSelect, userSelect] = [false, false, false];
        if(page === '/') {
            homeSelcet = true;
        } else if(page === '/find') {
            findSelect = true;
        } else if(page === '/user') {
            userSelect = true;
        }
		return(
			<Flex className={styles.tab}>
                <TabList src={home} page={'/'} font={font} isSelect={homeSelcet}/>
                <TabList src={find} page={'/find'} font={font} isSelect={findSelect}/>
                <TabList src={user} page={'/user'} font={font} isSelect={userSelect}/>     
			</Flex>
		)
	}
}

class TabList extends Component {
    render() {
        const { src, page, font, isSelect } = this.props;
        let oDiv;
        if(isSelect) {
            oDiv = <figure>
                        <img src={src} alt={`${font}`} />
                        <figcaption>{font}</figcaption>
					</figure>
        } else {
            oDiv = <Link to={page}>
                        <figure>
                            <img src={src} alt={`${font}`} />
                            <figcaption>{font}</figcaption>
					    </figure>
                    </Link>
        }
        return(
            <Flex.Item className="Item">
                {oDiv}
            </Flex.Item>
        );
    }
}
export default TabBar;