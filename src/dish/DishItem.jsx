import React, {Component} from 'react';

export default class Button extends Component {
    state = {

    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const{dataDishItem} = this.props;
        return (
            <div>
                {dataDishItem.map(item=>(
                    <dl>
                        <dt>{item.img}</dt>
                        <dd>{item.text}</dd>
                    </dl>
                ))}
            </div>
        );
    }
}