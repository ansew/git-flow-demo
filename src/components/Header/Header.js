import React from "react";

import "./Header.css";

class Header extends React.Component {


  toggle= () => {
    console.log('Toggle')
    this.props.toggleLayout();
  }
 


  render() {
    return (<nav>
      <div className="nav-wrapper header">
        <h5>React Users</h5>
        <ul className="right hide-on-med-and-down">
             
              <li><a onClick= {this.props.refresh}><i className="material-icons">refresh</i></a></li>
              <li><a  onClick={this.toggle}> <i className="material-icons">{this.props.isListView ? "grid_on":"list"}</i></a></li>
         
             
            </ul>
       {/* //<p><i class="small material-icons" onClick={toggleLayout}>list</i></p> */}
          
        
      
      </div>
     
     
      </nav>)
  }


  
}

export default Header;
