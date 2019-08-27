import React, {Component} from 'react'
import'../styles/Info.scss'
import foto from '../../img/conchori.jpg'
import AOS from 'aos';
import '../../node_modules/aos/src/sass/aos.scss'; 




class Info extends Component{
  constructor(props) { 
      super(props);

  } 

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }



	render(){
		return(
      <div>
        <div className="blackBar"></div>
        <div className="container-fluid infoContainer">
          <div className="row">
            <div className="col-lg-8 infoCol" data-aos='fade-up'>
              <p>Im a Front-end developer from Bolivia living in Buenos Aires, Argentina. I write beautiful, accessible, fast and full of love code. I try in every project to use the best  technology possible for the requirement, i've been coding for now 3 years and worked in many different things like pixel perfect animated banners, html responsive e-mails, landing pages and web apps. I am very much in love with the tech world and i look everyday on how to expand my knowledge and learn more (i have to say that im very good googling) cause im always curious.
                Beyond my Front-end skills i also enjoy art, sports, music and i love animals and nature. I graduated from film studies and i worked in that for some good time of my life mainly editing and filming different kinds of audiovisual content. 

              </p> 
            </div>
            <div className="col-md-4 d-none d-lg-block" data-aos='fade-up'>
              <img className="img-fluid" src={foto} alt=""/>
            </div>
            <div className="col-md-12 arrow" onClick={this.props.navToPortfolio}>
              <i className="fa fa-angle-double-down"></i>
            </div>
          </div>
        </div>
        <div className="col blackBar"></div>
      </div>
		)
	}
}

export default Info;