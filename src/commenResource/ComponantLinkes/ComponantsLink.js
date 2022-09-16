import React,{Component} from 'react'

class Componantslink extends Component{
  render(){
  return (
  
    <React.Fragment>
  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/">{this.props.linkName}</a></li>
</React.Fragment>

)

 }
  
}

export default Componantslink;