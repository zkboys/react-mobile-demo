import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Top extends Component {
    static propTypes = {
        topSource: PropTypes.string.isRequired
    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {top} = this.props;
        //console.log(topSource)
        return (
            <div className='top'>
                <span className="top-back">{top.back}</span>
                <span className="top-close">{top.close}</span>
                <span className="top-name">{top.name}</span>
                <span className="top-more">{top.more}</span>
            </div>
        );
    }
}