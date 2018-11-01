import React, {Component} from 'react';
import './style.css';
import './fontsize.js';

export default class Head extends Component{


    componentWillMount()
    {
    // this.setState({
    //     dateSource: this.props.dataSorce,
    // })
    }

    componentDidMount()
    {

    }

    render()
    {
        const {dateSource} = this.props;
        return (
                <div className="wrapper">
                    <ul className="topmenu">
                            {dateSource.map((item, index) =>(
                                <li key={index}><img src={item.img} alt={item.text}/>
                                    <div className="note">{item.text}</div>
                                </li>)
                            )}

                    </ul>
            </div>
        );
    }
}
