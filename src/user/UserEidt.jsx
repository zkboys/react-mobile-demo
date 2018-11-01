import React, {Component} from 'react';

export default class UserEidt extends Component {
    state = {
        name: '',
        age: '',
        data: {
            name: '',
            age: '',
        },
    };

    componentWillMount() {

    }

    componentDidMount() {
        // 基于 id 获取数据
        this.setState({
            data: {
                name: '张三',
                age: 23,
            }
        });
    }


    handleNameChange = (e) => {
        const {value} = e.target;
        const {data} = this.state;
        data.name = value;
        this.setState({data});
    };

    handleAgeChange = (e) => {
        const {value} = e.target;
        const {data} = this.state;
        data.age = value;
        this.setState({data});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, age} = this.state;

        console.log(name, age);

    };

    render() {
        console.log('render');
        const {name, age} = this.state.data;
        return (
            <div>
                <form>
                    姓名：<input type="text" value={name} onChange={this.handleNameChange} name="name"/>
                    年龄：<input type="text" value={age} onChange={this.handleAgeChange} name="age"/>
                    <button onClick={this.handleSubmit}>保存</button>
                </form>
            </div>
        );
    }
}
