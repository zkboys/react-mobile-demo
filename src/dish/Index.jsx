import React, {Component} from 'react';
import PropTypes from "prop-types";
import Title from "./Title";
import Banner from "./Banner";
import Nav from "./Nav";
import DishImg from "./DishImg";
import FoodTitle from "./FoodTitle";
import Footer from "./Footer"


import './Style.css';

import FoodFirst from "../image/food-first.png";
import FoodPic from "../image/food-first.png";
import addBtn from "../image/add.png";
import cutBtn from "../image/minus.png";

export default class Index extends Component {
    static defaultProps = {
        dataSource:PropTypes.array.isRequired,
        navData:PropTypes.array.isRequired,
        imgData:PropTypes.array.isRequired
    };
    state = {
        dataSource:[],
        navData:[],
        imgData:[]
    }
    componentDidMount(){
        const res = {
            data:{
                foodList:[
                    {
                        imgSrc:FoodFirst,
                        imgAlt:'大闸蟹'
                    },
                    {
                        imgSrc:FoodFirst,
                        imgAlt:'大闸蟹'
                    },
                    {
                        imgSrc:FoodFirst,
                        imgAlt:'大闸蟹'
                    },
                    {
                        imgSrc:FoodFirst,
                        imgAlt:'大闸蟹'
                    }
                ],
                navList: ['优惠套餐','午市套餐','镇店之宝','本店十大名菜','人气湘味','开胃凉菜'],
                imgList:[
                    {
                        foodSrc:FoodPic,
                        foodAlt:'大闸蟹',
                        foodTitle:'家庭菜系（3-6人）原价282元',
                        foodPrice:'￥168/套',
                        addBtnImg:addBtn,
                        cutBtnImg:cutBtn,
                        amount:0
                    },
                    {
                        foodSrc:FoodPic,
                        foodAlt:'大闸蟹',
                        foodTitle:'家庭菜系（3-6人）原价282元',
                        foodPrice:'￥168/套',
                        addBtnImg:addBtn,
                        cutBtnImg:cutBtn,
                        amount:0
                    }
                ]
            }
        };
        const {foodList,navList,imgList} = res.data;
        this.setState({dataSource:foodList,navData:navList,imgData:imgList});
    };
    render(){
        return (
            <div>
                <Title>今日Top</Title>,
                <Banner foodsData={this.state.dataSource}/>,
                <Nav navData={this.state.navData}/>,
                <FoodTitle>优惠套餐</FoodTitle>
                <DishImg imgData={this.state.imgData} />
                <Footer />
            </div>
        );
    }
}
