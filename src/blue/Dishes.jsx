import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Dishes extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {

    };

    render() {
        const {rightDishes} = this.props;
        return (
               <div>
                   <div className='right_dishes'>
                       {rightDishes.map(item=>(
                           <div className="right_item">
                               <img src={item.img} alt={item.alt} className='right_item' />
                               <p>{item.title}</p>
                               <p>{item.price}</p>
                               <p>{item.num}</p>
                           </div>
                       ))}
                   </div>
               </div>
        )
    }
}

export default  Dishes;