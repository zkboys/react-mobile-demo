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
            <div className="banner">
                <ul>
                    {dataSource.map(item => (
                        <li className="banner-show">
                            <img src={item.img}/>
                            <div>{item.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
