import React, {Component} from 'react';
import Title from './Title';
import Banner from './Banner';
import Category from './Category';
import DishItem from './DishItem';
import './style.css';
import banner1 from './Img/banner1.png';
import banner2 from './Img/banner2.png';
import banner3 from './Img/banner3.png';
import dt1 from './Img/dt1.png';
import dt2 from './Img/dt2.png';
import dt3 from './Img/dt3.png';

export default class Index extends Component {
    constructor(props) {
        super();
    }

    state = {
        dataSource:"",
        dataDishItem:"",
        dataCategory:""
    };

    componentWillMount(){

        this.setState({
            dataSource:[
                {img:banner1,title:'油焖大虾'},
                {img:banner2,title:'大闸蟹'},
                {img:banner3,title:'大虾'}
            ],
            dataCategory:["优惠套餐","午市套餐","镇店之宝","本店十大名菜","人气湘味","十大名菜"],
            dataDishItem:[
                {img:dt1,text:"家庭系列（3-6人）原价282元"},
                {img:dt2,text:"家庭系列（3-6人）原价282元"},
                {img:dt3,text:"家庭系列（3-6人）原价282元"}
            ]
        })


    };

    componentDidMount() {

    }

    render() {
        const {dataSource} = this.state;
        const {dataCategory} = this.state;
        const {dataDishItem} = this.state;
        return (
            <div>
                <Title>今日Top</Title>
                <Banner dataSource = {dataSource}/>
                <Category dataCategory = {dataCategory}/>
                <Title>今日Top</Title>
                <DishItem dataDishItem = {dataDishItem}/>
            </div>
        );
    }
}