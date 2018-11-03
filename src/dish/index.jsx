import React, {Component} from 'react';
import Title from './Title';
import Top from './Top';
import Banner from './Banner';
import Category from './Category';
import CartBar from './CartBar';
import DishItem from './DishItem';
import Banner1 from "./images/banner1.png"
import Banner2 from "./images/banner2.png"
import DishItem1 from "./images/DishItem1.png"
import './style.css'

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        top:{},
        banner:[],
        category:[],
        cartBar:[],
        dishItem:[]
    };

    componentWillMount() {

    }

    componentDidMount() {
        const res = {
            topSource:{
                back:"返回",
                close:"关闭",
                name:"所有商品",
                more:"..."
            },
            bannerSource:[
                {id:1,src:Banner1,title:"好吃好吃"},
                {id:2,src:Banner2,title:"想吃想吃"}
            ],
            categorySource:["优惠套餐","午市套餐","镇店之宝","人气湘味","开胃凉菜"],
            cartBarSource:["购物车空空如也","点好了"],
            dishItemSource: [
                {img:DishItem1,desCrib:"家庭菜系（3-6人）原价282元家庭菜系（3-6人）原价282元",price:"168元/套"},
                {img:DishItem1,desCrib:"家庭菜系（3-6人）原价282元家庭菜系（3-6人）原价282元",price:"168元/套"},
                {img:DishItem1,desCrib:"家庭菜系（3-6人）原价282元家庭菜系（3-6人）原价282元",price:"168元/套"},
                {img:DishItem1,desCrib:"家庭菜系（3-6人）原价282元家庭菜系（3-6人）原价282元",price:"168元/套"},
                {img:DishItem1,desCrib:"家庭菜系（3-6人）原价282元家庭菜系（3-6人）原价282元",price:"168元/套"},
                {img:DishItem1,desCrib:"家庭菜系（3-6人）原价282元家庭菜系（3-6人）原价282元",price:"168元/套"}
            ]
        };
        //解构赋值
        const {topSource,bannerSource,categorySource,cartBarSource,dishItemSource} = res;
        this.setState({top:topSource,banner:bannerSource,category:categorySource,cartBar:cartBarSource,dishItem:dishItemSource});
    }

    render() {
        const {top,banner,category,cartBar,dishItem}= this.state;
        //console.log({banner});
        return (
            <div>
                <Top top={top}></Top>
                <Title className="Title_title">今日Top</Title>
                <Banner banner={banner}></Banner>
                <Category category={category}></Category>
                <Title className="dishItem_title">优惠套餐</Title>
                <DishItem dishItem={dishItem}></DishItem>
                <CartBar cartbar={cartBar}></CartBar>
            </div>
        );
    }
}