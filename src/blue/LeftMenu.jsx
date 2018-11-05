import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        leftMenu: PropTypes.array.isRequired,
    };

    render() {
        const {leftMenu} = this.props;
        return (
            <div className= 'left_menu_wrap'>
                <ul className='leftMenu'>
                    {leftMenu.map(item=>(
                       <li>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default  LeftMenu;