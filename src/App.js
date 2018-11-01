import React, {Component} from 'react';
import Index from './dish/Index.jsx';
import './App.css';

class App extends Component {
    state = {
        job: 'IT',
    };

    render() {
        const {job} = this.state;
        return (
            <div>
                <Index>今日Top</Index>
            </div>
        );
    }
}

export default App;
