import React from 'react';
import food from '../assets/food.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import { Grid, WingBlank, WhiteSpace } from 'antd-mobile';
const data = [
    {
        icon: food,
        text: '饲料',
    },
    {
        icon: food2,
        text: '运输商',
    },
    {
        icon: food3,
        text: '广告',
    },
];


export default class Nav1 extends React.Component {

    render(){
        return(
            <WingBlank>
                <WhiteSpace size="md" />
                <Grid data={data} columnNum={3} />
            </WingBlank>
        )
    }
}