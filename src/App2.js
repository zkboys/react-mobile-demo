import React, {Component} from 'react';
import UserList from './demo/UserList';
import UserDetail from './demo/UserDetail';
import Button from './demo/Button';
import Children1 from './demo/Children1';
import './App.css';

class App extends Component {
    state = {
        job: 'IT',
        like: 'singing',
    };

    // ������ ����¼�
    handleJobClick = () => {
        this.setState({job: 'ǰ��'});
    };

    handleGetName = (name) => {
        console.log('App: ', name);
    };

    handleBtnClick = () => {
        console.log('button clicked!!');
    };

    handleGetColor = (t) => {
        console.log(t);
    };

    render() {
        const {job,like} = this.state;
        return (
            <div className="App">
                <Children1 like={like} getColor={this.handleGetColor} className="list"/>

                <Button
                    style={{color: 'green', background: 'yellow'}}
                    className="test-btn"
                    onClick={this.handleBtnClick}
                    title="��ť"
                    >���ǰ�ť</Button>


                <UserList className="user-list" job={job} getName={this.handleGetName}/>
                <button onClick={this.handleJobClick}>������</button>
                <UserDetail name="����" age={23} job="ǰ��"/>
            </div>
        );
    }
}

export default App;
