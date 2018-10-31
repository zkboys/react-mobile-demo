import React, {Component} from 'react';
import UserList from './demo/UserList';
import UserDetail from './demo/UserDetail';
import './App.css';

class App extends Component {
    state = {
        job: 'IT',
    };

    // 换工作 点击事件
    handleJobClick = () => {
        this.setState({job: '前端'});
    };

    handleGetName = (name) => {
        console.log('App: ', name);
    };


    render() {
        const {job} = this.state;
        return (
            <div className="App">
                <UserList className="user-list" job={job} getName={this.handleGetName}/>
                <button onClick={this.handleJobClick}>换工作</button>
                <UserDetail name="李四" age={23} job="前端"/>
            </div>
        );
    }
}

export default App;
