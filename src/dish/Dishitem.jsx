import React, {Component} from 'react';
import minus from './img/minus.png';
import add from './img/add.png';

export default  class Dishitem extends Component {
    state = {

    };

    render() {
        const {dishItemDataSource} = this.props;
        return (
            <div className="dishItem-total">
                {dishItemDataSource.map( item => (
                    <div className="dishItem-content" key={item.id}>
                        <div className="dishItem-left"><img className="dishItem-img" src={item.img} alt="" /></div>
                        <div className="dishItem-right">
                            <div className="dishItem-introduce">{item.introduce}</div>
                            <div className="dishItem-price">{item.price}<span className="dishItem-price-bg">/套</span></div>
                            <div className="dishItem-icon">
                                <div className="dishItem-minus"><img className="dishItem-minus-img" src={minus} alt="" /></div>
                                <div className="dishItem-text">1</div>
                                <div className="dishItem-add"><img className="dishItem-add-img" src={add} alt="" /></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}