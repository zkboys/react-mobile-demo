import React ,{Component} from 'react';
import dishItem from './images/dishItem.png'

export default class DishItem extends Component{
    state = {

    };
    render(){
        return (
            <div className="DishItem_block">
                <div className="Dish_item">
                    <img src={dishItem} alt="²ËÆ·Í¼" className="dishItem"/>
                    <img src={dishItem} alt="²ËÆ·Í¼" className="dishItem"/>

                </div>
            </div>
        );
    }
}