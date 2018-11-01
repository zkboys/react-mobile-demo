import React,{Component} from 'react';
import PropTypes from 'prop-types';
import iconLeft from './Img/iconLeft.png';
import iconRight from './Img/iconRight.png';
import './style.css';


export default class Title extends Component {
    static propTypes = {
        children:PropTypes.string
    };
    state = {}
    componentWillMount() {

    }

    componentDidMount() {

    }
    render() {
        const {children} = this.props;
        return (
            <div className = "title_block">
                <img className="title_icon" src={iconLeft} alt=""/>
                <span className="title_text">{children}</span>
                <img className="title_icon" src={iconRight} alt=""/>
            </div>
        );
    }
}