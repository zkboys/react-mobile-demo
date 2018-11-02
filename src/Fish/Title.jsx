import React, {Component} from 'react';
import PropTypes from 'prop-types';
import iconLeft from './images/Title-left.png';
import iconRight from './images/Title-right.png';
import './style.css';

export default class Title extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
    };

    render() {
        const {children} = this.props;
        return (
            <div className="banner-top">
                <img src={iconLeft} />
                <div class="banner-word">{children}</div>
                <img src={iconRight} />
            </div>
        );
    }
}
