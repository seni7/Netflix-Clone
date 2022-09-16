import React,{Component} from 'react'


class links extends Component {
    render(){
        return (
            <div>
                <li><a href="/">{this.props.linkName}</a></li>
            </div>
          )
    }

}

export default links