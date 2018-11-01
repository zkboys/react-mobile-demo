import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserDetail extends Component {
    static defaultProps = {
        job: 'IT',
    };
    //默认的值


    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    };
    //默认的类型

    state = {};
    //组件的内部数据

    componentWillMount() {

    }
    //渲染之前执行的函数

    componentDidMount() {

    }
    //渲染后执行的函数

    render() {
        const {
            name,
            age,
            job,
        } = this.props;
//props是父函数传给子函数的
        return (
            <div>
                <div>姓名: {name}</div>
                <div>年龄: {age}</div>
                <div>工作: {job}</div>
            </div>
        );
    }
}
