import React, {Component} from 'react';
import PropTypes from 'prop-types';

import iconleft from './images/decoration1@3x.png';
import iconright from './images/decoration2@3x.png';
import './style.css';
import './fontsize.js';


export default class Head extends Component{
    static  propTypes = {
        children: PropTypes.string.isRequired,
    };


    render()
    {
        const {children} = this.props;
        return (
                <div className="wrapper">
                    <div className="toptitle">
                        <img src={iconleft} alt="左边"/>
                        <span>{children}</span>
                        <img src={iconright} alt="右边" />
                    </div>
            </div>
        );
    }
}
