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
        console.log('aa',{...others});//把对象里面的值列举出来
        return (
            <div
                style={{
                    ...style,
                    color: 'red',
                    display: 'inline-block',
                    padding: '10px 20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                {...others}
            >
                {children}
            </div>
        );
    }
}

