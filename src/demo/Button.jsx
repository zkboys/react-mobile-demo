import React, {Component} from 'react';

export default class Button extends Component {
    state = {
        name: '',
        age: 2,
    };

    componentWillMount() {
        this.setState({name: '111'});
    }

    componentDidMount() {

    }

    handleClick = () => {
        this.setState({age: 11});
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
