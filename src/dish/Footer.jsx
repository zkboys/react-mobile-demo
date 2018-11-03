import React, {Component} from 'react';
import shopImg from '../image/shop.png';

import "./Style.css";

export default class Footer extends Component{
    state = {
        leftText:'购物车空空如也',
        rightText:'选好了'
    };
    render(){
        const {leftText,rightText} = this.state;
        return (
            <div className="footer">
                <div className="left">
                    <div className="left_icon">
                        <img src={shopImg} alt="shopImg" />
                    </div>
                    <span className="left_font">{leftText}</span>
                </div>
                <div className="right">{rightText}</div>
            </div>
        );
    }
}