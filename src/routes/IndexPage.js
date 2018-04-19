import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Button} from 'antd-mobile';
import Nav from '../components/Nav';
import Nav1 from '../components/Nav1';
import Search from '../components/Search';
import ShopList from '../components/ShopList';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Search />
      <Nav />
      <Nav1 />
      <ShopList/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
