import React, {Component} from 'react';
import Title from './Title.jsx';
import Banner from './Banner.jsx';
import './style.css';
import banner1 from './Img/banner1.png';
import banner2 from './Img/banner2.png';


export default class Index extends Component {
    state = {
        dataSource:[
            {img:banner1,title:"油焖大虾"},
            {img:banner2,title:"红烧排骨"},

        ]
    };

    render() {
        const {dataSource} = this.state;


        return (
            <div>
                <Title>今日Top</Title>
                <Banner dataSource={dataSource} />
            </div>
        );
    }
}
