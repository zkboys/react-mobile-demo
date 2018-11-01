import React ,{Component} from 'react'

export default class Category extends Component {
    state = {

    };
    render (){
        const {dataSource} = this.props;
        const {categorySource} = this.props;

        return (
            <div className="category">
                {
                    categorySource.map(item => (
                        <div className="category_item">{item}</div>
                    ))
                }


            </div>
        )
    }
}