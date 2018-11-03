import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {category} = this.props;
        return (
            <div className='category'>
                {category.map((item,index) => {
                    if(index===0)
                        return (
                            <span className="category_item_first">{item}</span>
                        )
                    else
                        return (
                            <span className="category_item">{item}</span>
                        )
                })}
            </div>
        );
    }
}