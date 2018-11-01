import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Banner extends Component {
    static defaultProps = {
        dataSource: [],
    };

    static propTypes = {
        dataSource: PropTypes.array,
    };

    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {dataSource} = this.props;
        return (
            <div>
                {dataSource.map(item => (
                    <div className="banner-item">
                        <img src={item.img} alt={item.title}/>
                        <div>{item.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}
