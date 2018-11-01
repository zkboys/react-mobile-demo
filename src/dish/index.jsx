import React, {Component} from 'react';
import bannerFist from './images/banner-img-first.png';
import bannerSecond from './images/banner-img-second.png';
import bannerThree from './images/banner-img-three.png';
import Banner from './Banner';
import Title from './Title';
import Category from './Category';
import DishItem from './DishItem';
import CartBar from './CartBar';
import './style.css';

export default class Index extends Component{
    ComponentWillMount(){

    };
    static defaultProps = {
        dataSource:[],
    };
    state = {
        dataSource:[
            {img: bannerFist, title : "油焖大虾"},
            {img: bannerSecond, title : "大闸蟹"},
            {img: bannerThree, title : "北京烤鸭"},
        ],
        dishItemSource:[
            {img : bannerThree, describe:"家庭菜系", price :"128"},
            {img : bannerThree, describe:"家庭菜系", price :"128"},
            {img : bannerThree, describe:"家庭菜系", price :"128"},
            {img : bannerThree, describe:"家庭菜系", price :"128"},
            {img : bannerThree, describe:"家庭菜系", price :"128"},
        ]
    };


    ComponentDidMount(){
        setTimeout(
            this.setState({
                    dataSource :[
                        {img: bannerFist, title : "油焖大虾"},
                        {img: bannerSecond, title : "大闸蟹"},
                        {img: bannerThree, title : "北京烤鸭"},
                    ]
                }
            ),1500
        )

    }
    render () {
        const {dataSource} =this.state;
        const {dishItemSource} = this.state;
        return (
            <div>
                <Title>今日top</Title>
                <Banner bannerdataSource={dataSource}/>
                <Category/>
                <DishItem dishItemSource={dishItemSource}/>
                <CartBar/>
            </div>
        )
    }
}
