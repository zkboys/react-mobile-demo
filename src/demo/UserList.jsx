import React, {Component} from 'react';

export default class UserList extends Component {
    constructor(props) {
        super();
        console.log('constructor');
    }

    //state表示自己储存的数据
    state = {
        users: [],
    };

    componentWillMount() {
        console.log('willMount');
    }

    componentDidMount() {
        console.log('didMount');
        console.log(this.oll);
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

            //将ajax传入的数据交给userList
            const {userList} = res.data;
            //将数据交给state，表示子组件自己的数据 setState的作用可以做到只要数据变化就会重新渲染
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

    handleSendName = () => {
        const {getName} = this.props;
        console.log(getName);
        //function (name) {
        //    console.log('App: ', name);
        //}
        //App.js:18 App:  我是UserList 的name
        getName('我是UserList 的name');
    };

    handleInputChange = (e) => {
        const {value} = e.target;
        console.log(value);
    };

    render() {
        console.log('render');
        const {users} = this.state;
        const {job, className} = this.props;
        return (
            <div id="root-div" className={className}>
                <input type="text" onChange={this.handleInputChange}/>
                <button onClick={this.handleSendName}>给父组件name</button>
                我的工作是：{job}
                <ol ref={node => this.oll = node}>
                    {users.map(item => {
                        return (<li key={item.id}>姓名：{item.name}</li>);
                    })}
                </ol>
            </div>
        );
    }
}
