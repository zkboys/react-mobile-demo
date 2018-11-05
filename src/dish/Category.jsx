import React, {Component} from 'react';


export default class Category extends Component {
    state = {

    };

    render() {
        const {children,categoryDataSource} = this.props;
        return (
            <div className="Category">
                <div className="Category-title">{children}</div>
                {categoryDataSource.map( item => (
                    <li className="Category-item" key={item.id}>{item.name}</li>
                ))}
            </div>
        );
    }
}