import React,{Component} from 'react'

class comp64 extends Component {
    render(){

        return (
            <div>
                				<div className="title-wraper">
							{this.props.title}
						</div> 
						<div className="description-wraper">
							{this.props.disc}
						</div>
						<div className="price-wrapper">
							{this.props.price}
						</div>

						<div className="links-wrapper">
							<ul>
								<li><a href="/">Learn more</a></li>
								<li><a href="/">Apply now</a></li>
							</ul> 
						</div>
                 
            </div>
          )
    }

}

export default comp64