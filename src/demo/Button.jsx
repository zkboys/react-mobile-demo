import React, {Component} from 'react';

export default class Button extends Component {
    state = {};

    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {
        const {children, style, ...others} = this.props;
        console.log(others);
        return (
            <div
                style={{
                    ...style,
                    color: 'red',
                    display: 'inline-block',
                    padding: '10px 20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                {...others}
            >
                {children}
            </div>
        );
    }
}
