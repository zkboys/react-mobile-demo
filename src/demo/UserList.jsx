import React, {Component} from 'react';

export default class UserList extends Component {
    constructor(props) {
        super();
        console.log('constructor');
    }

    state = {
        users: [],
    };

    componentWillMount() {
        console.log('willMount');
    }

    componentDidMount() {
        console.log('didMount');
        setTimeout(() => {
            // ajax 请求成功
            const res = {
                data: {
                    userList: [
                        {id: '111', name: '111', age: 11},
                        {id: '222', name: '222', age: 22},
                        {id: '333', name: '333', age: 33},
                    ],
                }
            };

            const {userList} = res.data;
            this.setState({users: userList});
        }, 1500);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWilReceiveProps');
        console.log('this.props: ', this.props);
        console.log('nextProps: ', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        const {users} = this.state;
        const {job, className} = this.props;
        return (
            <div id="root-div" className={className}>
                我的工作是：{job}
                <ol>
                    {users.map(item => {
                        return (<li key={item.id}>姓名：{item.name}</li>);
                    })}
                </ol>
            </div>
        );
    }
}
