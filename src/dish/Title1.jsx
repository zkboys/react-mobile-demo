import React ,{Component} from 'react';
import iconLeft from './images/title_icon_left.png'
import iconRight from './images/title_icon_right.png'
import './style.css'

export default  class Title extends Component {
    state = {};
    render(){
        const {children} = this.props;
        return (
            <div className="title-block dish-title">
                <img src={iconLeft} alt="title_icon" />
                <span className="title-text">{children}</span>
                <img src={iconRight} alt="title_icon" />
            </div>
        );
    }
}