import React, {Component} from 'react';
import Title from './Title';
import Banner from './Banner';
import LeftShow from './LeftShow';
import BannerImg from './images/BannerImg.png';
export default class Index extends Component {
    state = {
        bannerDataSource: [],
        leftNameDateSource:[]
    };

    componentWillMount() {

    }

    componentDidMount() {
        // TODO 发请求获取bannerDataSource
        this.setState({
            bannerDataSource: [
                {img: {BannerImg}, title: '油焖大虾'},
                {img: {BannerImg}, title: '大闸蟹'},
                {img: {BannerImg}, title: '北京烤鸭'}
            ],
            leftNameDateSource:[
                '优惠套餐',
                '午市套餐',
                '镇店之宝',
                '本店十大名菜',
                '人气湘味',
                '开胃凉菜',
            ]
        })

    }

    render() {
        const {bannerDataSource} = this.state;
        const {leftNameDateSource} = this.state;
        return (
            <div>
                <Title>今日TOP</Title>
                <Banner dataSource={bannerDataSource}/>
                <LeftShow leftNameDateSource={leftNameDateSource}/>
            </div>
        );
    }
}
