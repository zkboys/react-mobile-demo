import React, {Component} from 'react';

export default class Button extends Component {
    state = {

    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const{dataSource} = this.props;
        return (
            <div>
                {dataSource.map(item=>(
                    <div className="banner_tit">
                        <img src={item.img} alt={item.title} className="banner_item"/>
                        <div>{item.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}