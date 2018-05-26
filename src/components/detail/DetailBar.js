import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';
import DetailBarLeft from './DetailBar_Left';
import Comment from '../comment/comment';
import ShopDetail from '../shop';

const tabs2 = [
    { title: '商品', sub: '1' },
    { title: '评价', sub: '2' },
    { title: '商家', sub: '3' },
];

export default class DetailBar extends React.Component {
    handleClick = (data,index) => {
        if(index){
           if(this.props.handleChange){
               this.props.handleChange(false);
           }
        }
        else{
            if(this.props.handleChange){
                this.props.handleChange(true);
            }
        }
    }
    render(){
        return(
            <div style={{ position: 'fixed', top: '20%', left: 0, width: '100%', height: '80%'}}>
                <Tabs tabs={tabs2}
                    initialPage={0}
                    tabBarPosition="top"
                    renderTab={tab => <span>{tab.title}</span>}
                    usePaged={false}
                    swipeable={false}
                    onTabClick={this.handleClick.bind(this)}
                >
                    <div style={{height: '100%'}}>
                        <DetailBarLeft id={this.props.id}/>
                    </div>
                    <div style={{ backgroundColor: 'rgb(243,245,247)' }}>
                        <Comment id={this.props.id}/>
                    </div>
                    <div style={{ backgroundColor: 'rgb(243,245,247)',height: '100%' }}>
                       <ShopDetail />
                </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
