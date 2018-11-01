import React, {Component} from 'react';
<<<<<<< Updated upstream
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



    render() {
        const {job} = this.state;
        return (
            <div className="App">
                <UserList className="user-list" job={job}/>
                <button onClick={this.handleJobClick}>换工作</button>
                <UserDetail name="李四" age={23} job="前端"/>
            </div>
=======
import Index from "./wangsiyu/Index.jsx";


class App extends Component {

    render(){
        return(
            <Index />
>>>>>>> Stashed changes
        );
    }
}

export default App;
