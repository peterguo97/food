import React from 'react';
import normal from './css/basic.css';
import DiscoverListitem from './DiscoverListItem';
import Chicken from '../assets/chicken.jpg';

const data = [
    {
        name: '黄焖鸡',
        url: '/1/detail',
        img: Chicken
    },
    {
        name: '黄焖鸡',
        url: '/1/detail',
        img: Chicken
    },
    {
        name: '黄焖鸡',
        url: '/1/detail',
        img: Chicken
    },
    {
        name: '黄焖鸡',
        url: '/1/detail',
        img: Chicken
    },
]

class Discover extends React.Component {
    render(){
        return(
            <div className={normal.Wrapper}>
                <div className={normal.back}>
                    <span style={{padding: '8px'}}>发现</span>
                </div>
                <div  className={normal.discoverlist}>
                    {
                        data.map(function(value,index) {
                            return (
                                <div key={index} className={normal.discoverWrap}>
                                    <DiscoverListitem data={value}/>
                                </div>
                            )
                        }, this)
                    }
                </div>
            </div>
        )
    }
}

export default Discover;