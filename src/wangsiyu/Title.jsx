import React, {Component} from 'react';
import iconLeft from './Img/icon-title-left.png';
import iconRight from './Img/icon-title-right.png';

export default class Title extends Component {
    state = {};
    render() {
        const {children}=this.props;
        return (
            <div>
                <div className="title-block">
                    <img className="title-icon" src={iconLeft} alt="左边图标"/>
                    <span className="title-text">{children}</span>
                    <img className="title-icon" src={iconRight} alt="左边图标"/>
                </div>
            </div>
        );
    }
}
