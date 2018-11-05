import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
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
            <div>
                <div className='title_top'>
                    <div className='title_top_img'>
                        {imgSource.map(item=>(
                            <div>
                                <div className='banner_item'>
                                    <img src={item.img} alt={item.alt} />
                                    <div className='banner_item-cont'>{item.title}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default  Banner;