import React, {Component} from 'react';
import PropTypes from 'prop-types';
import iconLeft from './images/icon-title-left.png';
import iconRight from './images/icon-title-right.png'
import './style.css'

//Title×Ó×é¼þ
export default class Title extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired
    };

    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {children} = this.props;
        return (
            <div className='title'>
                <img src={iconLeft} className='icon-title'/>
                <span className='title-name'>{children}</span>
                <img src={iconRight} className='icon-title'/>
            </div>
        );
    }
}
