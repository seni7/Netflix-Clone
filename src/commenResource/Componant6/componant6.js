import React from 'react'
import arcade from '../images/icons/arcade.png'
import Componant123 from '../Componant123/comp64'
function componant6() {
  return (
    <div>
        	<section className="sixth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={arcade} alt=""/>
							</div>
						</div>
						<div className="description-wraper white">
							Agent 8 is a small hero on a big mission.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="/">Play now<sup>2</sup></a></li>
								<li><a href="/">Learn about Apple Arcade</a></li>
							</ul> 
						</div>						
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
					<Componant123 title="Apple Card Monthly Installments  " disc="Pay for your next iPhone over time, interest-free with Apple Card." price=" " />
					</div>
				</div>					
			</div>
		</div> 
	</section>
    </div>
  )
}

export default componant6