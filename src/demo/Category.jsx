import React, {Component} from 'react';
import './style.css';
import './fontsize.js';

export default class Category extends Component{



    componentWillMount()
    {

    }

    componentDidMount()
    {

    }

    render()
    {
        const {cateGory} = this.props;
        return (
                <ul className="leftmenu">
                    {cateGory.map((item, index) =>(
                        <li key={index}>{item.text}</li>)
                    )}
                </ul>
        );
    }
}
