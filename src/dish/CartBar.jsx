import React, {Component} from 'react';
import shopCar from './img/shop.png';

export default  class CartBarr extends Component {
    state = {

    };

    render() {

        return (
            <div className="CartBar-total">
                <div className="CartBar-left">
                    <div className="CartBar-buy">
                        <img className="CartBar-shopCar" src={shopCar} alt="" />
                    </div>
                    <p className="CartBar-shopCar-text">购物车空空如也~</p>
                </div>
                <div className="CartBar-right"><p className="CartBar-text">点好了~</p></div>
            </div>
        );
    }
}