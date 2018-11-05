import React,{Component} from 'react';
import PropTypes from 'prop-types';
import carImg from './img/shop.png';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        carNum: PropTypes.string.isRequired,
    };

    render() {
        const {carNum,readyBuy} = this.props;
        return (
                <div className='footer'>
                    <p>{carNum}</p>
                    <div className='imgWrap'><img src={carImg} alt=''/></div>
                    <p>{readyBuy}</p>
                </div>
        )
    }
}


export default  Footer;