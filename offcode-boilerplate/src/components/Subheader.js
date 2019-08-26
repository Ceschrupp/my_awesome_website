import React, {Component} from 'react'

import'../styles/Header.scss'



class Subheader extends Component{

     constructor(props) {
      super(props);

    
  }

	render(){
		return(
      <div className="container-fluid headerContainer-2">
        <div className="row">
          <div className="col headerCol">
            <h1 className="leftSide">HI!</h1>
            <h1 className="rightSide">I AM CECILIA</h1>
            <div className="arrow" onClick={this.props.navToAbout}>
              <i className="fa fa-angle-double-down"></i>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Subheader;