import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Top extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {

    };

    render() {
        const {children,topSource} = this.props;
        return (
               <div>
                   <img src={topSource[0].img}/>
                   <span>{children}</span>
                   <img src={topSource[1].img}/>
               </div>
        )
    }
}

export default  Top;