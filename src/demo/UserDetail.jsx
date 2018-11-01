import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserDetail extends Component {
    static defaultProps = {
        job: 'IT',
    };

    //props校验验证
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    };

    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {
            name,
            age,
            job,
        } = this.props;

        return (
            <div>
                <div>姓名: {name}</div>
                <div>年龄: {age}</div>
                <div>工作: {job}</div>
            </div>
        );
    }
}
