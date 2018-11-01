import React, {Component} from 'react';
import Title from './Title';
import Top from './Top';
import Banner from './Banner'
import Banner1 from "./images/banner1.png"
import Banner2 from "./images/banner2.png"

//父组件
export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        top:{},
        banner:[]
    };

    componentWillMount() {

    }

    componentDidMount() {
        //传入数据
        const res = {
            topSource:{
                back:"<返回",
                close:"关闭",
                name:"全部商品",
                more:"..."
            },
            bannerSource:[
                {id:1,src:Banner1,title:"油闷大虾"},
                {id:2,src:Banner2,title:"麻辣鳕鱼"}
            ],
            categorySource:[
                "优惠套餐","午市套餐","镇店之宝","人气湘味","开胃凉菜"
            ]
        }
        //获取到topSource数据
        const {topSource} = res;
        this.setState({top:topSource});
        //获取到banner图片
        const {bannerSource} = res;
        this.setState({banner:bannerSource});
        //提取category数据
        const {categorySource} = res;
    }

    render() {
        const {top,banner}= this.state;
        //console.log({banner});
        return (
            <div>
                <Top topSource={top}></Top>
                <Title>今日Top</Title>
                <Banner banner={banner}></Banner>
            </div>
        );
    }
}