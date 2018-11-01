import React, {Component} from 'react';
import Title from './Title.jsx';
import Banner from './Banner';
import Category from './Category';
import bannerImg from './img/banner.png';
import bannerImg1 from './img/banner1.png';
import './Style.css';

export default  class Index extends Component {

    state = {
        dataSource : [],
    };

    componentDidMount() {
        //TODO 发请求获取dataSource
        this.setState({
            dataSource:[
                {img:bannerImg,til:"油焖大虾"},
                {img:bannerImg1,til:"麻辣香蟹"},
            ],
            categoryDataSource:[
                {name:"午市套餐"},
                {name:"镇店之宝"},
                {name:"本店十大名菜"},
                {name:"人气湘味"},
                {name:"开胃凉菜"},
            ]
        })
    }

    render() {
        const {dataSource} = this.state;
        return (
            <div className="wrap">
                <Title>今日top</Title>
                <Banner dataSource={dataSource}></Banner>
                <Category>优惠套餐</Category>
            </div>
        );
    }
}