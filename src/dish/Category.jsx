import React, {Component} from 'react';


export default class Category extends Component {
    state = {

    };

    render() {
        const {children} = this.props;
        return (
            <div className="Category">
                <div className="Category-title">{children}</div>

            </div>
        );
    }
}