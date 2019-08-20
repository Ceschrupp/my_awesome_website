import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import'../styles/Contacto.scss'

class Contacto extends Component{
	constructor(props) {
		super(props);
	}
	render(){

		return(
			<div className="">
				<div className="blackBar"></div>
				<div className="container-fluid contactoContainer">
					<div className="row">
						<div className="col-md-12 title">
							<h1>Contact<br/>me</h1>
						</div>
						<div className="col-md-12 moreInfo">
							<a href="mailto:ceschrupp@gmail.com" target="_blank"><p>ceschrupp@gmail.com</p></a>
				            <a href="https://www.linkedin.com/in/ceciliaschrupp" target="_blank"><h2>Linkedin</h2></a>
				            <a href="https://github.com/Ceschrupp" target="_blank"><h2>Github</h2></a>
				            <a href="/images/myw3schoolsimage.jpg" download><h2>Download CV</h2></a>
				        </div>
				        <div className="col-md-12 arrow" onClick={this.props.navToQuienes}>
				            <i className="fa fa-angle-double-up"></i>
				        </div>
					</div>
				</div>
				<div className="blackBar"></div>
			</div>
		)
	}
}

export default Contacto;