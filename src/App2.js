import React, {Component} from 'react';
import UserList from './demo/UserList';
import Button from './demo/Button';

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
                <UserList className="user-list" job={job} getName={this.handleGetName}/>
                <Button
                    style={{color: 'green', background: 'yellow'}}
                    className="test-btn"
                    onClick={this.handleBtnClick}
                    title="按钮"
                    >我是按钮</Button>
            </div>
        );
    }
}

export default App;
