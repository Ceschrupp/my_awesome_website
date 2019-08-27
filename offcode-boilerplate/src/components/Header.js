import React, {Component} from 'react'
import logo from '../../img/logo.png'

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import'../styles/Header.scss'



class Header extends Component{

    constructor(props) {
      super(props);




    }


	render(){
		return(
    <div>

      <div className="container-fluid headerContainer">
        <div className="row">
            <div className="col-6">
            </div>
            <div className="col-6 logo">
              <img src="" alt=""/>
            </div>
        </div>
      </div>
    </div>
		)
	}
}

export default Header;