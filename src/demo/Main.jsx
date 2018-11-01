import React, {Component} from 'react';
import './style.css';
import './fontsize.js';
import dish3 from './images/dish3.png';
import add from './images/add@3x.png';
import minus from './images/minus@3x.png';
import iconleft from './images/decoration1@3x.png';
import iconright from './images/decoration2@3x.png';

export default class Main extends Component{


    state = {};

    componentWillMount()
    {

    }

    componentDidMount()
    {

    }

    render()
    {
        return (
            <div className="rightcontent">
                <div className="righttop">
                    <img src={iconleft}/>
                    <span>午市套餐</span>
                    <img src={iconright}/>
                </div>
                {/*1内容*/}
                <div className="main_dish">
                    <div className="main_dish_img">
                        <img src={dish3}/>
                    </div>
                    <div className="main_dish_info ">
                        <h1>家庭菜系（3-6人）原价282元</h1>
                        <div className="price">￥200<span>/套</span></div>
                        <div className="oprator">
                            <img src={add} className="margin-right10"/>
                            <img src={minus}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
