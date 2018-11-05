import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Prefer extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {

    };

    render() {
        const {children,dishSource} = this.props;
        return (
               <div className='dishTop'>
                   <img src={dishSource[0].img}/>
                   <span>{children}</span>
                   <img src={dishSource[1].img}/>
               </div>
        )
    }
}

export default  Prefer;