import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        imgSource: PropTypes.array.isRequired,
    };

    render() {
        const {imgSource} = this.props;
        return (
                <div className='title_top'>
                    {imgSource.map(item=>(
                        <div className="title_item">
                            <img src={item.img} alt={item.alt} className='banner_item' />
                            <div className='banner_item-cont'>{item.title}</div>
                        </div>
                    ))}
                </div>
        )
    }
}


export default  Banner;