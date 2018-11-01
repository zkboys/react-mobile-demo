import React, {Component} from 'react';
import Head from './demo/Head';
import Banner from './demo/Banner';
import Main from './demo/Main';
import Footer_shop from './demo/Footer_shop';
import dish1 from './demo/images/dish1.png';
import dish2 from './demo/images/dish1.png';

import './App.css';
import Category from "./demo/Category";

class App extends Component {

       state = {
           dataSource: [],
           cateGory: [],
       }

    componentWillMount()
    {
        this.setState({
            dateSource: [
                {img: dish1, text: '大螃蟹'},
                {img: dish2, text: '大龙虾'},
            ],
            cateGory: [
                {text: '午市套餐'},
                {text: '镇店之宝'},
                {text: '人气湘味'},
                {text: '开胃凉菜'},
                {text: '凉菜类'},
            ],
        })
    }

    render() {
           const {dateSource, cateGory} = this.state;
        return (
            <div>
               <Head >今日热点</Head>
                <Banner dateSource={dateSource}></Banner>
                <div className="main">
                  <Category cateGory={cateGory}></Category>
                    <Main></Main>
                </div>
                <Footer_shop></Footer_shop>
            </div>
        );
    }
}

export default App;
