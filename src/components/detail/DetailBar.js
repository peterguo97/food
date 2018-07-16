import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';
import DetailBarLeft from './DetailBar_Left';
import Comment from '../comment/comment';
import GoodsDetail from '../goodsDetail';
import { connect } from 'dva';

const tabs2 = [
    { title: '商品', sub: '1' },
    { title: '详情', sub: '2' },
    { title: '评价', sub: '3' }
];

class DetailBar extends React.Component {
    handleClick = (data,index) => {
        if(index){
            //index 0 means first page
            this.props.dispatch({
                type: 'shoplist/showFooter',
                payload: {
                    isshow: false,
                }
            })
        }
        else{
            this.props.dispatch({
                type: 'shoplist/showFooter',
                payload: {
                    isshow: true,
                }
            })
        }
        this.props.dispatch({
            type: 'shoplist/changePage',
            payload: {
                page: index
            }
        })
    }
    render(){
        const page = this.props.page;
        // console.log(page);
        
        return(
            <div style={{ position: 'fixed', top: '20%', left: 0, width: '100%', height: '80%'}}>
                <Tabs initialPage={0}
                    onTabClick={this.handleClick.bind(this)}
                    renderTab={tab => <span>{tab.title}</span>}
                    swipeable={false}
                    tabBarPosition="top"
                    tabs={tabs2}
                    page={page}
                >
                    <div style={{height: '100%'}}>
                        <DetailBarLeft id={this.props.id}/>
                    </div>
                    <div style={{height: '100%'}}>
                       <GoodsDetail/>
                    </div>
                    <div style={{ backgroundColor: 'rgb(243,245,247)',height: '100%'}}>
                        <Comment id={this.props.id}/>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}

const mapStateToProps = ({shoplist}) => {
    return {
        goodsid: shoplist.goodsid,
        page: shoplist.page,
        isshow: shoplist.showFooter,
    }
};

export default connect(mapStateToProps)(DetailBar);