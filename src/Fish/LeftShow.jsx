import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class LeftShow extends Component {
    static defaultProps = {
        leftNameDateSource : [],
    };

    static propTypes = {
        leftNameDateSource: PropTypes.array,
    };

    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {leftNameDateSource} = this.props;
        return (
            <div class="left_show">
                {
                    leftNameDateSource.map(item =>(
                        <div>
                            {item}
                        </div>
                    ))
                }
            </div>
        );
    }
}
