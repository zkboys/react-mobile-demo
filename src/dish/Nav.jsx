import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import './Style.css';

export default class Nav extends Component{
    static defaultProps = {
      nav:PropsTypes.array.isRequired
    };

    render(){
        const {navData} = this.props;
        return (
            <div>
                <ul className='nav'>
                    {navData.map(item => {
                        return (<li className='nav-item' key={item.id}>{item}</li>);
                    })}
                </ul>
            </div>
        );
    }
}