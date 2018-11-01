import React, {Component} from 'react';

export default class UserTitle extends Component{
    render(){
        const {
            name,
            age,
            job,
            hobby,
            } = this.props;
        return(
            <div>
                <div>姓名：{name}</div>
                <div>年龄：{age}</div>
                <div>工作：{job}</div>
                <div>爱好：{hobby}</div>
            </div>
        );
    }

}