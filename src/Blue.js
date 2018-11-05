import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Nav from './blue/Nav'
import Banner from './blue/Banner'
import Top from './blue/Top'
import Prefer from './blue/Prefer'
import LeftMenu from './blue/LeftMenu'
import Dishes from './blue/Dishes'
import Footer from './blue/Footer'
import titleLeft from './blue/img/decoration2.png'
import titleRight from './blue/img/decoration1.png'
import banner1 from './blue/img/banner1.png'
import banner2 from './blue/img/banner2.png'
import rightDish from './blue/img/rightDish.png'
import minus from './blue/img/minus.png'
import add from './blue/img/add.png'

class Blue extends Component {
    state = {
        nav:{},
        imgSource:[],
        topSource: [
            {img:titleLeft,alt:'pic1'},
            {img:titleRight,alt:'pic2'}
        ],
        dishSource: [
            {img:titleLeft,alt:'pic1'},
            {img:titleRight,alt:'pic2'}
        ],
        leftMenu:[],
        rightDishes:[],
        carNum:'',
        readyBuy:''
    };
    componentDidMount() {
        setTimeout(() => {
            const res = {
                data: {
                    navList: {
                        prev:'返回',
                        close:'关闭',
                        all:'全部商品',
                        rest:'···'
                    },
                    imgSource: [
                        {img:banner1,alt:'pic1',title:'南湖油焖大虾'},
                        {img:banner2,alt:'pic2',title:'北湖油焖大虾'}
                    ],
                    leftMenu: [
                        '优惠套餐','镇店之宝','午市套餐','本店十大名菜','人气湘味','开胃凉菜'
                    ],
                    rightDishes: [
                        {id:1,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥168/套',num:'1'},
                        {id:2,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥268/套',num:'1'},
                        {id:3,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥368/套',num:'1'},
                        {id:4,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥468/套',num:'1'},
                        {id:5,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥568/套',num:'1'},
                        {id:6,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥568/套',num:'1'},
                        {id:7,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥568/套',num:'1'},
                        {id:8,img:rightDish,minus:minus,add:add,title:'家庭菜系（3-6）人原价282元',price:'￥568/套',num:'1'}
                    ],
                    carNum:"购物车空空如也~",
                    readyBuy:'选好了'
                }
            };
            const {navList,imgSource,leftMenu,rightDishes,carNum,carImg,readyBuy} = res.data;
            this.setState({nav: navList,imgSource,leftMenu,rightDishes,carNum,readyBuy});
        }, 0);
    }

    render() {
        const {nav,imgSource,dishSource,leftMenu,topSource,rightDishes,carNum,carImg,readyBuy} = this.state;
        return (
            <div>
                <Nav prev={nav.prev} close={nav.close} all={nav.all} rest={nav.rest}/>
                <Top topSource={topSource}>今日Top</Top>
                <Banner imgSource={imgSource} />
                <LeftMenu leftMenu={leftMenu} />
                <Prefer dishSource={dishSource}>优惠套餐</Prefer>
                <Dishes rightDishes={rightDishes}></Dishes>
                <Footer carNum={carNum}  readyBuy={readyBuy} />
            </div>
        );
    }
}

export default Blue;
