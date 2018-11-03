import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'

//Banner子组件
export default class Banner extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {banner} = this.props;
        return (
            <div>
                {banner.map(item =>{
                    return (
                        <div className="banner-item">
                            <img src={item.src} alt={item.title} className='banner-item-img'/>
                            <div className='banner-item-title'>{item.title}</div>
                        </div>
                    )}
                )}
            </div>
        )
    }
}
