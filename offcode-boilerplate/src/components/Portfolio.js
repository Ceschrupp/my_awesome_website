import React, {Component} from 'react';
import Modal from 'react-modal';
import'../styles/Portfolio.scss';
import foto from '../../img/conchori.jpg';
import fargol from '../../img/fargol1.jpg';
import fargolLogo from '../../img/fargolLogo.jpg';
import seisd from '../../img/6d.jpg';
import seisdLogo from '../../img/6dLogo.jpg';
import fullDog from '../../img/fulldog.jpg';
import fullDogLogo from '../../img/fulldogLogo.jpg';
import JeepLogo from '../../img/jeepLogo.jpg';
import Jeep from '../../img/jeeplanding.jpg';
import JeepPlanLogo from '../../img/JeepPlanLogo.jpg';
import JeepPlan from '../../img/jeep_plan.jpg';
import JeepWinterLogo from '../../img/JeepWinterLogo.jpg';
import JeepWinter from '../../img/jeep_invierno.jpg';
import JeepSummerLogo from '../../img/JeepSummerLogo.jpg';
import JeepSummer from '../../img/jeep_verano.jpg';
import FiatVeranoLogo from '../../img/fiatVeranoLogo.jpg';
import FiatVerano from '../../img/fiat_verano.jpg';
import FiatPlanLogo from '../../img/FiatPlanLogo.jpg';
import FiatPlan from '../../img/fiat_plan.jpg';
import view from '../../img/view.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'transparent',
    border                : 'none',

  }
};

Modal.setAppElement('#app')

class Portfolio extends Component{

        constructor() {
        super();

        this.state = {
          imgId:null,
          modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      openModal() {
        this.setState({modalIsOpen: true});
      }

      afterOpenModal() {
        // references are now sync'd and can be accessed.
        
      }

      closeModal() {
          this.setState({
            modalIsOpen: false,
            imgId: null
          });
      }

      showImageId(imgId) {
        this.setState({
          imgId: imgId
        });
      }


    	render(){

        const cards = [
        {
          title: 'Fargol de Argentina',
          modalpic: fargol,
          picture: fargolLogo
        },
        {
          title: '6d Its now',
          modalpic: seisd,
          picture: seisdLogo
        },
        {
          title: 'Jeep Argentina',
          modalpic: Jeep,
          picture: JeepLogo

        },
        {
          title: 'Jeep Plan',
          modalpic: JeepPlan,
          picture: JeepPlanLogo
        },
        {
          title: 'Jeep Winter',
          modalpic: JeepWinter,
          picture: JeepWinterLogo

        },
        {
          title: 'Jeep Summer',
          modalpic: JeepSummer,
          picture: JeepSummerLogo
        },
        {
          title: 'Fiat Summer',
          modalpic: FiatVerano,
          picture: FiatVeranoLogo
        },
        {
          title: 'Fiat plan',
          modalpic: FiatPlan,
          picture: FiatPlanLogo
        },
        {
          title: 'Fiat Full dog',
          modalpic: fullDog,
          picture: fullDogLogo
        },

      ]
      var modal = "";
        if(this.state.imgId != null){
          modal = (
            <Modal isOpen={true} onRequestClose={this.closeModal} style={customStyles} ariaHideApp={false}>
              <img src={cards[this.state.imgId].modalpic} alt="" className="img-responsive modalPic"/>
              <button className="close modalButton" onClick={this.closeModal}><i className="fa fa-times"></i></button>
            </Modal>
          )
        }
      const carded = (cards.map((card, index) =>
                  <div key={card.title} className="col-md-4 portfolioItem">
                    <img src={card.picture} alt="" className="img-fluid" onClick={() => this.showImageId(index)}/>
                    <div className="view" onClick={() => this.showImageId(index)} style={{ backgroundImage: "url(" + view + ")"}}></div>
                    <div className="imgBg"><h1>{card.title}</h1></div>
                    {modal}
                  </div>

                  )
                )
    		return(
          <div>
            <div className="blackBar"></div>
            <div className="container-fluid porfolioContainer">
              <div className="row">
                <div className="col-md-12">
                  <h1>PORTFOLIO</h1>
                </div>
                {carded}
                <div className="col-md-12 arrow" onClick={this.props.navToContacto}>
                  <i className="fa fa-angle-double-down"></i>
                </div>
              </div>
            </div>
            <div className="col blackBar"></div>
          </div>
    		)
    	}
    }

export default Portfolio;