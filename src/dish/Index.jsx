import React, {Component} from 'react';
import Title from './Title';
import Banner from './Banner';

export default class Index extends Component {
    state = {
        bannerDataSource: [],
    };

    componentWillMount() {

    }

    componentDidMount() {
        // TODO 发请求获取bannerDataSource
        this.setState({
            bannerDataSource: [
                {img: '', title: '油焖大虾'},
                {img: '', title: '大闸蟹'},
                {img: '', title: '北京烤鸭'},
            ]
        })

    }

    render() {
        const {bannerDataSource} = this.state;
        return (
            <div>
                <Title>今日TOP</Title>
                <Banner dataSource={bannerDataSource}/>
            </div>
        );
    }
}
