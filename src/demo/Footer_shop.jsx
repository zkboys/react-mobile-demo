import React, {Component} from 'react';
import shop from './images/shop@3x.png';
import './style.css';
import './fontsize.js';

export default class Footer_shop extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="footer">
                    <div className="footer_left">&nbsp;&nbsp;购物车空空如也～</div>
                    <div className="footer_right">点好了</div>

                </div>
                <div className="shopbutton"> <img src={shop} className="img"/></div>
            </div>
        );
    }
}
