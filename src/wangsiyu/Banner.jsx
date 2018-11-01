import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Banner extends Component {
    static defaultProps={
        datasource:PropTypes.array.isRequired
    };

    state = {};

    render() {
        const {dataSource}=this.props;
        return (
            <div>
                {dataSource.map(item=>(
                    <div className="banner-top">
                        <img className="banner-icon" src={item.img} alt={item.title}/>
                        <div className="banner-tit">{item.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}
