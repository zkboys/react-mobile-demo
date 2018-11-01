import React, {Component} from 'react';
import Dish from './dish/Index';
import './App.css';

class App extends Component {
    //state = {
    //    job: 'IT',
    //};
    //
    //// 换工作 点击事件
    //handleJobClick = () => {
    //    this.setState({job: '前端'});
    //};
    //
    //handleGetName = (name) => {
    //    console.log('App: ', name);
    //};
    //
    //handleBtnClick = () => {
    //    console.log('button clicked!!');
    //};

    render() {
        return (
            <Dish/>
        );
    }
}
export default App;
