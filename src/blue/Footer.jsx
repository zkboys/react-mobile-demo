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
                    {carNum}
                    <img src={carImg} alt='' style={{background:'red'}} />
                    <p>{readyBuy}</p>
                </div>
        )
    }
}


export default  Footer;