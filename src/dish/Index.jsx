import React, {Component} from 'react';
import Title from './Title.jsx';
import Banner from './Banner';
import Category from './Category';
import Dishitem from './Dishitem';
import CartBar from './CartBar';
import bannerImg from './img/banner.png';
import bannerImg1 from './img/banner1.png';
import dishItem from './img/dishitem.png';
import './Style.css';

export default  class Index extends Component {

    state = {
        dataSource : [],
        categoryDataSource : [],
        dishItemDataSource : []
    };

    componentWillMount() {
        //TODO 发请求获取dataSource
        this.setState({
            dataSource:[
                {id:0,img:bannerImg,til:"油焖大虾"},
                {id:1,img:bannerImg1,til:"麻辣香蟹"},
            ],
            categoryDataSource:[
                {id:0,name:"午市套餐"},
                {id:1,name:"镇店之宝"},
                {id:2,name:"本店十大名菜"},
                {id:3,name:"人气湘味"},
                {id:4,name:"开胃凉菜"},
            ],
            dishItemDataSource:[
                {id:0,img:dishItem,introduce:"家庭菜系（3-6人）原价282元",price:"￥168.00"},
                {id:1,img:dishItem,introduce:"海鲜大咖菜系（1-3人）原价382元",price:"￥208.00"},
                {id:2,img:dishItem,introduce:"烤肉菜系（1-3人）原价302元",price:"￥208.00"},
                {id:3,img:dishItem,introduce:"家庭菜系（3-6人）原价282元",price:"￥168.00"},
                {id:4,img:dishItem,introduce:"海鲜大咖菜系（1-3人）原价382元",price:"￥208.00"},
                {id:5,img:dishItem,introduce:"家庭菜系（3-6人）原价282元",price:"￥168.00"},
                {id:6,img:dishItem,introduce:"家庭菜系（3-6人）原价282元",price:"￥168.00"}
            ]
        })
    }

    render() {
        const {dataSource,categoryDataSource,dishItemDataSource} = this.state;
        return (
            <div className="wrap">
                <Title>今日top</Title>
                <Banner dataSource={dataSource}></Banner>
                <Category categoryDataSource={categoryDataSource}>优惠套餐</Category>
                <Title>今日top</Title>
                <Dishitem dishItemDataSource={dishItemDataSource}></Dishitem>
                <CartBar></CartBar>
            </div>
        );
    }
}