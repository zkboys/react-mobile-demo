import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Left from '../image/title-icon-left.png';
import Right from '../image/title-icon-right.png';


import './Style.css';

export default class Title extends Component {
    static defaultprops = {
        children:PropTypes.string.isRequired
    };
    state = {};
    render(){
        const {children} = this.props;
        return (
            <div className="food-title">
                <img className="title-icon-left" src={Left} alt="左图"/>
                <span className="title-text">{children}</span>
                <img className="title-icon-right" src={Right} alt="右图"/>
            </div>
        );
    }
}
