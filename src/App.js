import React, {Component} from 'react';
import UserList from './demo/UserList';
import UserDetail from './demo/UserDetail';
<<<<<<< HEAD
=======
import Button from './demo/Button';
>>>>>>> master
import './App.css';

class App extends Component {
    state = {
        job: 'IT',
    };

    // 换工作 点击事件
    handleJobClick = () => {
        this.setState({job: '前端'});
    };

<<<<<<< HEAD

=======
    handleGetName = (name) => {
        console.log('App: ', name);
    };

    handleBtnClick = () => {
        console.log('button clicked!!');
    };
>>>>>>> master

    render() {
        const {job} = this.state;
        return (
            <div className="App">
<<<<<<< HEAD
                <UserList className="user-list" job={job}/>
=======
                <Button
                    style={{color: 'green', background: 'yellow'}}
                    className="test-btn"
                    onClick={this.handleBtnClick}
                    title="按钮"
                >我是按钮</Button>


                <UserList className="user-list" job={job} getName={this.handleGetName}/>
>>>>>>> master
                <button onClick={this.handleJobClick}>换工作</button>
                <UserDetail name="李四" age={23} job="前端"/>
            </div>
        );
    }
}

export default App;
