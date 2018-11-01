import React, {Component} from 'react';

export default class Button extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const{dataCategory} = this.props;
        return (
            <div>
                <table className="category-block">
                    {dataCategory.map(item=>(
                        <tr>{item}</tr>
                    ))}
                </table>
            </div>
        );
    }
}