import React, {Component} from 'react'

import'../styles/Footer.scss'


class Footer extends Component{

	render(){
		return(
      <div>
      <div className="container-fluid footerContainer">
        <div className="row">
          <div className="col redesSociales">
              <a href={this.state.facebook} target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
              <a href={this.state.twitter} target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
              <a href={this.state.youtube} target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
              <a href={this.state.instagram} target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>  
          </div>
        </div>
      </div>
      <div className="container-fluid footerContainer-2">
        <div className="row">
          <div className="col footerCol-2">
            <img src="" alt=""/>
            <p>© 2016 FCA US LLC. TODOS LOS DERECHOS RESERVADOS.CHRYSLER, DODGE, JEEP, RAM Y MOPAR SON MARCAS REGISTRADAS DE FCA US LLC.</p>   
          </div>
        </div>
      </div>
    </div>
		)
	}
}

export default Footer;