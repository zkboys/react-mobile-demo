import React, {Component} from 'react';
import UserList from './demo/UserList';
import UserDetail from './demo/UserDetail';
import Button from './demo/Button';
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

    handleBtnClick = () => {
        console.log('button clicked!!');
    };

    render() {
        const {job} = this.state;
        return (
            <div className="App">
                <Button
                    style={{color: 'green', background: 'yellow'}}
                    className="test-btn"
                    onClick={this.handleBtnClick}
                    title="按钮"
                    >我是按钮</Button>

                <UserList className="user-list" job={job} getName={this.handleGetName}/>
                <button onClick={this.handleJobClick}>换工作</button>
                <UserDetail name="李四" age={23} job="前端"/>
            </div>
        );
    }
}

export default App;


