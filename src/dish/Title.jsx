import React, {Component} from 'react';
import PropTypes from 'prop-types';
import iconLeft from './images/icon-title-left.png';
import iconRight from './images/icon-title-right.png'
import './style.css'

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
        const {children,className} = this.props;
        //console.log(1,className);
        return (
            <div className={className}>
                <img src={iconLeft}/>
                <span className='title-name'>{children}</span>
                <img src={iconRight} className='icon-title'/>
            </div>
        );
    }
}