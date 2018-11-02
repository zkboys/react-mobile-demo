import React,{Component} from 'react';
import PropTypes from 'prop-types';

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
                <ul className='leftMenu'>
                    {leftMenu.map(item=>(
                       <li>{item}</li>
                    ))}
                </ul>
        )
    }
}


export default  LeftMenu;