import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        prev: PropTypes.string,
        close: PropTypes.string,
        all: PropTypes.string,
    };

    render() {
        const {prev,close,all,rest} = this.props;
        return (
                <div className= 'headNav'>
                    <span>{prev}</span>
                    <span>{close}</span>
                    <span>{all}</span>
                    <span>{rest}</span>
                </div>
        )
    }
}


export default  Nav;