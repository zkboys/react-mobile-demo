import React, {Component} from 'react';
import PropTypes from 'prop-types';
import iconLeft from './img/iconLeft.png';
import iconRight from './img/iconRight.png';

export default  class Title extends Component {
    static propTypes = {
        children:PropTypes.string.isRequired,
    }
    state = {

    };

    render() {
        const {children} = this.props;
        return (
            <div className="title-total">
                <img className="icon-left" src={iconLeft} alt="×ó²àÍ¼±ê" />
                <span className="title-text">{children}</span>
                <img className="icon-right" src={iconRight} alt="ÓÒ²àÍ¼±ê" />
            </div>
        );
    }
}