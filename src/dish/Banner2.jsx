import React, {Component} from 'react';

export default class Banner extends Component {
    //static propTypes = {
    //    dataSource:ProTypes.array(),
    //};

    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {dataSource} = this.props;
        return (
            <div>
                {dataSource.map(item => (
                    <div className="title_item">
                        <img src = {item.img} alt = {item.title} className = "banner_item"/>
                        <div>{item.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}