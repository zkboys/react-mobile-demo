import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Banner extends Component{
    //设置一个默认值,可以设置为空
    //static defaultProps = {
    //    bannerdataSource:[],
    //};
    static propTypes ={
        bannerdataSource:PropTypes.array,
    };
    state = {};
    ComponentWillMount(){

    }

    //ComponentDidMount(){
    //    this.setState({
    //            bannerdataSource : [
    //                {img: {banner1}, title : "油焖大虾"},
    //                {img: {banner2}, title : "大闸蟹"},
    //                {img: {banner3}, title : "北京烤鸭"},
    //            ]
    //        }
    //    )
    //}
    render () {
        const {bannerdataSource} =this.props;
        console.log("bannerdataSource",bannerdataSource);
        return (
            <div>
                {bannerdataSource.map(item => {
                    return(
                    <div className="banner">
                        <img  src={item.img} alt={item.title}/>
                       {/*<div className="bannerText">{item.title}</div>*/}
                    </div>)
                })}
            </div>
        )
    }
}
