import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Portfolio from './Portfolio.js'
import Info from './Info.js'
import Contacto from './Contacto.js'

import Subheader from './Subheader.js'


import'../styles/Especies.scss'



class Home extends Component{

	 constructor(props) {
	    super(props);
	    this.scrollto = this.scrollto.bind(this);
	    this.scrollToTop = this.scrollToTop.bind(this);
	    this.navToQuienes = this.navToQuienes.bind(this);
      	this.navToAbout = this.navToAbout.bind(this);
      	this.navToContacto = this.navToContacto.bind(this);
      	this.navToPortfolio = this.navToPortfolio.bind(this);

    
  }

  scrollto(sectionName) {
      scroller.scrollTo(sectionName, {
          duration: 800,
          delay: 200,
          smooth: true,
          offset: -25, // Scrolls to element + 50 pixels down the page
      })
  }

  scrollToTop() {
      scroll.scrollToTop({ duration: 500 });
  }

    navToQuienes() {
        this.scrollToTop();
    }

    navToAbout() {
        this.scrollto("About");
    }

    navToContacto() {
        this.scrollto("Contact");
    }

    navToPortfolio() {
        this.scrollto("Portfolio");
    }


	render(){

		return(
			<div className="">
				<Menu>
			        <a id="home" className="menu-item" onClick={this.navToQuienes}>Home</a>
			        <a id="about" className="menu-item"  onClick={this.navToAbout}>About</a>
			        <a id="portfolio" className="menu-item" onClick={this.navToPortfolio}>Portfolio</a>
			        <a id="contact" className="menu-item" onClick={this.navToContacto}>Contact</a>
			    </Menu>
				<Element name="Home">
					<Subheader navToAbout={this.navToAbout}/>
				</Element>
				<Element name="About">
					<Info navToPortfolio={this.navToPortfolio}/>
				</Element>
				<Element name="Portfolio">
					<Portfolio navToContacto={this.navToContacto}/>
				</Element>
				<Element name="Contact">
					<Contacto navToQuienes={this.navToQuienes} />
				</Element>
			</div>
		)
	}
}
export default Home;