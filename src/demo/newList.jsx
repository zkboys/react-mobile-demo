import React,{Component} from 'react'

export default class newList extends Component {
    state = {
        name: 'click'
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        const {name} = this.state
        return (
            <div>
                <button onClick={this.handleCilckBtn}>{name}</button>
            </div>
        );
    };

}