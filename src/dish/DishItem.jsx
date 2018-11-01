import React, {Component} from 'react';
import AddImg from './images/add.png';
import MinusImg from './images/minus.png';

export default class Title extends Component{

    render(){
        const {dishItemSource} = this.props;
        console.log(dishItemSource);
        return(
            <div>
                {dishItemSource.map(item => {
                    return(
                        <dl>
                            <dt><img src={item.img} alt=""/></dt>
                            <dd>
                                <p>{item.describe}</p>
                                <p>{item.price}</p>
                            </dd>
                            <div>
                                <img src={AddImg} alt=""/>
                                <span>1</span>
                                <img src={MinusImg} alt=""/>
                            </div>
                        </dl>
                    );
                })}
            </div>
        );
    }
}