import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Contacto from './Contacto.js'
import Home from './Home.js'
import Footer from './Footer.js'
import Header from './Header.js'


class App extends Component{

	 constructor(props) {
    super(props);
    this.state = {
      loading: true,
      initDataLoaded: false
    }

    
  }

	
	render(){

      return (
      	<div>
        		<Header/>
    	      	<BrowserRouter>
          				<Switch>
                    <Route exact path='/' render={(props) => <Home />}/>
          				</Switch>
    			   </BrowserRouter>
		    </div>
      );

    }
}

export default App;
