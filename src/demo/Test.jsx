import React, {Component} from 'react';
export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {str: "hello"};
    }

    componentWillMount() {
        alert("componentWillMount1");
    }

    componentDidMount() {
        alert("componentDidMount1");
    }

    componentWillReceiveProps(nextProps) {
        alert("componentWillReceiveProps1");
    }

    shouldComponentUpdate() {
        alert("shouldComponentUpdate1");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        alert("componentWillUpdate1");
    }

    componentDidUpdate() {
        alert("componentDidUpdate1");
    }

    componentWillUnmount() {
        alert("componentWillUnmount11");
    }

    render() {
        alert("render");
        return (
            <div>
                <span><h2>{parseInt(this.props.num)}</h2></span>
                <br />
                <span><h2>{this.state.str}</h2></span>
            </div>
        );
    }
}