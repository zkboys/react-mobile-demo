import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Top×Ó×é¼þ
export default class Top extends Component {
    static propTypes = {
        topSource: PropTypes.string.isRequired
    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {topSource} = this.props;
        //console.log(topSource)
        return (
            <div className='top'>
                <span className="top-back">{topSource.back}</span>
                <span className="top-close">{topSource.close}</span>
                <span className="top-name">{topSource.name}</span>
                <span className="top-more">{topSource.more}</span>
            </div>
        );
    }
}
