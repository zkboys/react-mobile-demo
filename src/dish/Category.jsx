import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Category�����
export default class Category extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {topSource} = this.props;
        //console.log(topSource)
        return (
            <div className='category'>
                <li></li>
            </div>
        );
    }
}
