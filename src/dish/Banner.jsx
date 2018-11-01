import React, {Component} from 'react';

export default  class Banner extends Component {
    state = {

    };

    render() {
        const {dataSource} = this.props;
        console.log(1,this.props)

        return (
            <div className="banner-total">
                    {dataSource.map( item => (
                        <div className="banner-item">
                            <img className="banner-img" src={item.img} alt="" />
                            <div className="banner-text">{item.til}</div>
                        </div>
                    ))}
            </div>
        );
    }
}