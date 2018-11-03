import React, {Component} from "react";
import PropTypes from "prop-types";



import "./Style.css";

export default class DishImg extends Component{
    static defaultProps = {
        imgData:PropTypes.array.isRequired
    };
    render(){
        const {imgData} = this.props;
        return (
            <div>
                {imgData.map(item => {
                    return (
                        <div className="food-lists">
                            <img src={item.foodSrc} alt="item.foodAlt" className="dish-img"/>
                            <span className="foods-title">{item.foodTitle}</span>
                            <span className="food-price">{item.foodPrice}</span>
                            <div className="btn-amount-img">
                                <img src={item.addBtnImg} className="btn-img flo" alt="add" />
                                <span className="amount flo">{item.amount}</span>
                                <img src={item.cutBtnImg} className="btn-img flo" alt="cut"/>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}