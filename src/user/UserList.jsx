import React, {Component} from 'react';

export default class UserList extends Component {
    state = {
        name: '',
        age: '',
        loading: false,
        dataSource: [],
    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    handleNameChange = (e) => {
        const {value} = e.target;
        this.setState({name: value});
    };

    handleAgeChange = (e) => {
        const {value} = e.target;
        this.setState({age: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, age} = this.state;

        this.setState({loading: true});
        setTimeout(() => {
            this.setState({
                loading: false,
                dataSource: [
                    {id: 11, name: '11', age: 11},
                    {id: 22, name: '112', age: 22},
                    {id: 33, name: '113', age: 33},
                    {id: 44, name: '114', age: 44},
                    {id: 55, name: '115', age: 55},
                    {id: 66, name: '116', age: 66},
                    {id: 77, name: '117', age: 77},
                    {id: 88, name: '118', age: 88},
                ],
            });
        }, 1000 * 2);

        // this.setState({loading: true});
        // this.props.ajax
        //     .get('/user', {name, age})
        //     .then(res => {
        //         const dataSource = res.data;
        //         this.setState({dataSource});
        //     })
        //     .finally(() => this.setState({loading: false}));

        console.log(name, age);

    };

    render() {
        const {dataSource, loading} = this.state;
        return (
            <div>
                {loading ? <div>正在加载</div> : null}
                <div className="query-bar">
                    <form>
                        姓名：<input type="text" onChange={this.handleNameChange} name="name"/>
                        年龄：<input type="text" onChange={this.handleAgeChange} name="age"/>
                        <button onClick={this.handleSubmit}>查询</button>
                    </form>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dataSource.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        );
    }
}
