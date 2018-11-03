import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'
import add from "./images/add.png"
import minus from "./images/minus.png"

export default class DishItem extends Component {
    state = {};

    componentDidMount() {

    }

    render() {
        const {dishItem} = this.props;
        return(
            //Ñ­»·±éÀú
            <div className="dishItem">
                {dishItem.map((item)=>{
                    return (
                        <div className='dishItem_item'>
                            <div className="dishItem_item_imgDiv">
                                <img src={item.img} className="dishItem_item_img"/>
                            </div>
                            <div className="dishItem_item_words">
                                <p className="dishItem_item_title">{item.desCrib}</p>
                                <p className="dishItem_item_price">{item.price}</p>
                                <form action="" method="post" className="dishItem_item_but">
                                    <input type="button" value="" className="Btn_min" style={{background:{minus}}}/>
                                    <input type="text" value="1" className="Btn_num"/>
                                    <input type="button" value="" className="Btn_add" style={{background:{add}}}/>
                                </form>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}