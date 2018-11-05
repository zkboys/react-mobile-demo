import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Dishes extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        num: 1,
        newNum:'',
        minusNum:''
    }

    addNum = () => {
        this.state.newNum = this.state.num+1;
        this.setState({num:this.state.newNum});
    }

    minusNum = () => {
        this.state.minusNum = this.state.num - 1
        if(this.state.num<1){
            this.setState({num: 0});
        }else{
            this.setState({num: this.state.minusNum});
        }
    }

    static propTypes = {

    };

    render() {
        const {num} = this.state;
        const {rightDishes} = this.props;
        return (
                   <div className='right_dishes'>
                       {rightDishes.map(item=>(
                           <div className="right_item" key={item.id} >
                               <img src={item.img} alt={item.alt} />
                               <p className='right_item_tit'>{item.title}</p>
                               <p className='right_item_price'>{item.price}</p>
                               <ul className='ul'  >
                                   <li onClick={this.minusNum}><img src={item.minus} className='minus' /></li>
                                   <li>{num}</li>
                                   <li onClick={this.addNum} ><img src={item.add} className='add' /></li>
                               </ul>
                           </div>
                       ))}
                       <div style={{height:'90px'}}></div>
                   </div>
        )
    }
}

export default  Dishes;