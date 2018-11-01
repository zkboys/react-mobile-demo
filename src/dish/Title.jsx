import React, {Component} from 'react';
import PropTypes from 'prop-types';
import iconLeft from './images/icon-title-left.png';
import iconRight from './images/icon-title-right.png';
import './style.css';

export default class Title extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
    };

    render() {
        const {children} = this.props;
        return (
            <div className="title-block">
                <img className="title-icon" src={iconLeft} alt="左侧图标"/>
                <span className="title-text">{children}</span>
                <img className="title-icon" src={iconRight} alt="右侧图标"/>
            </div>
        );
    }
}
