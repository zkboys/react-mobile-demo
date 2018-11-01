import React ,{Component} from 'react';
import Banner_item1 from './images/Banner_item1.png'
import Banner_item2 from './images/Banner_item2.png'

export default class Banner extends Component{
    state = {};
    componentDidMount (){


    }
    render (){
        const {dataSource} = this.props;
        console.log("dataSource",dataSource)
        return (
            <div className="banner_block">
                {dataSource.map(item => (
                            <div className="banner_item">
                                <img src={item.img} alt="Banner_item1" className="banner_item_pic"/>
                                <div className="banner_item_tit">{item.title}</div>
                            </div>
                    ))}
            </div>

        );
    }
}