import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Nav from '../components/Nav';
import Nav1 from '../components/Nav1';
import Search from '../components/Search';
import ShopList from '../components/ShopList';
import { TabBar } from 'antd-mobile';
import My from './my/Account';
import Discover from '../components/discover';
import user from '../assets/user.svg';
import userSelect from '../assets/user-select.svg';
import find from '../assets/find.svg';
import findSelect from '../assets/find-select.svg';
import home from '../assets/home.svg';
import homeSelect from '../assets/home-select.svg';


class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${home}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${homeSelect}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <div className={styles.normal}>
              <Search history={this.props.history} />    
              <Nav />
              <Nav1 />
              <ShopList/>
            </div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${find}) center center /  21px 21px no-repeat` }}        
         />
       }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${findSelect}) center center /  21px 21px no-repeat` }}
              />
            }
            title="发现"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Discover />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${user}` }}
            selectedIcon={{ uri: `${userSelect}` }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
			      <My />
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
  
// class IndexPage extends React.Component {
//   render(){
//     return(
//       <div className={styles.normal}>
//         <Search history={this.props.history}/>
//         <Nav />
//         <Nav1 />
//         <ShopList/>
//       </div>
//     )
//   }
// }

// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <Search />
//       <Nav />
//       <Nav1 />
//       <ShopList/>
//     </div>
//   );
// }

// IndexPage.propTypes = {
// };

export default connect()(TabBarExample);
