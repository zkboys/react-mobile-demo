import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cartBarIcon from './images/cartbar-icon.png';

export default class CartBar extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {cartbar} = this.props;
        return (
            <div className='cartBar'>
                <span className="cartBar_icon"><img src={cartBarIcon} className='cartBar_icon_img'/></span>
                <span className="cartBar_empty">{cartbar[0]}</span>
                <span className="cartBar_ok">{cartbar[1]}</span>
            </div>
        );
    }
}