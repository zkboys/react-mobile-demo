import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import FoodFirst from "../image/food-first.png";
// import FoodSceond from "../image/food-second.png";

import './Style.css';

export default class Banner extends Component {
    static defaultProps = {
        foodsData:PropTypes.array.isRequired
    };
    render(){
        const {foodsData} = this.props;
        return (
            <div className='banner-foods'>
                <div className='banner-block'>
                    {foodsData.map(item => {
                        return (
                            <div className='banner' key={item.id}>
                                <img className='foodImg' src={item.imgSrc} alt="item.imgAlt"/>
                                <div className='food-text'>{item.imgAlt}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

        );
    }
}