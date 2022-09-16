import React from 'react'
import logo from '../images/icons/logo-sm.png'
import search from '../images/icons/search-icon-sm.png'
import cart from '../images/icons/cart-sm.png'
import ComponantLinkes from '../ComponantLinkes/ComponantsLink'
function headre() {
  return (
    <React.Fragment>
        <div class="nav-wrapper fixed-top">
		<div class="container">
			<nav class="navbar navbar-toggleable-sm navbar-expand-md">
			    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a class="navbar-brand mx-auto" href="/">
                    <img src={logo} alt=""/></a>

			    <div class="navbar-collapse collapse">
			        <ul class="navbar-nav nav-justified w-100 nav-fill">
                    
					    <ComponantLinkes linkName="Mac"/>
						<ComponantLinkes linkName="iphone"/>
						<ComponantLinkes linkName="ipad"/>
						<ComponantLinkes linkName="watch"/>
						<ComponantLinkes linkName="tv"/>
						<ComponantLinkes linkName="Music"/>
						<ComponantLinkes linkName="Support"/>
					
					    
						<li class="nav-item" ><a class="nav-link js-scroll-trigger" href="/search/">
                            <img src={search} alt=""/></a></li>
						<li class="nav-item"><a  class="nav-link js-scroll-trigger" href="/cart/">
                            <img src={cart} alt=""/></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    </React.Fragment>
  )
}

export default headre