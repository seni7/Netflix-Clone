import React,{Component} from 'react'

class container extends Component {
    render(){
        return (
            <div>
                    <div className="new-alert">
                        New
                    </div>
        
                    <div className="title-wraper bold black ">
                        {this.props.Name} 
                    </div> 
                    <div className="description-wrapper black">
				        { this.props.Discription}
			      </div>

			    <div className="price-wrapper grey">
				{this.props.price}
			     </div>
        
                    <div className="links-wrapper">
                        <ul>
                            <li><a href="/">Learn more</a></li>
                            <li><a href="/">Buy </a></li>
                        </ul> 
                    </div>
            </div>
          )
    }

}

export default container