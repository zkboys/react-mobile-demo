import React, {Component} from 'react';
import PropTypes from 'prop-types';
import iconLeft from './images/icon-title-left.png';
import iconRight from './images/icon-title-right.png';


export default class Title extends Component{
    static propTypes ={
        children:PropTypes.string
    };
    //state = {};
    //ComponentWillMount(){
    //
    //}
    //
    //ComponentDidMount(){
    //
    //}
    render () {
        const {children} =this.props;
        return (
            <div className="title-root">
                <img src={iconLeft} alt="左侧图标"/>
                <span className="title-text">{children}</span>
                <img src={iconRight} alt="右侧图标"/>
            </div>
        )
    }
}
