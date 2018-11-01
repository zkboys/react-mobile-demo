import React,{Component} from 'react';
import Title1 from './Title1';
import Banner from './Banner';
import Category from './Category';
import DishItem from './DishItem';
import Banner_item1 from './images/Banner_item1.png'
import Banner_item2 from './images/Banner_item2.png'


export default class Index extends Component {
    state = {
        dataSource:[],
        categorySource:[]
    };
    componentWillMount(){

        this.setState({
            dataSource:[
                {img:Banner_item1,title:'油焖大虾'},
                {img:Banner_item2,title:'大闸蟹'}
            ],
                categorySource:["优惠套餐","午市套餐","镇店之宝","人气香味","开胃凉菜"]
        }
        )


    };

    render (){
        const {dataSource} = this.state;
        const {categorySource} = this.state;
        console.log({categorySource});

        return (
            <div>
                <Title1>今日TOP</Title1>
                <Banner dataSource={dataSource}></Banner>
                <Category categorySource={categorySource}></Category>
                <Title1>优惠套餐</Title1>
                <DishItem/>
            </div>
        )
    }
}
