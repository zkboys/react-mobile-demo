import React, {Component} from 'react';

export default class Children1 extends Component{
    state = {
        color:'red',
    };

    componentDidMount = () => {
        const {getColor} = this.props;
        getColor('aaa');
    }



    render(){
        const {like,className} = this.props;
        return(
            <div className={className}>
                <div>爱好：{like}</div>
            </div>
        )
    }
}