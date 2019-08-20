import React, {Component} from 'react';
import Modal from 'react-modal';
import'../styles/Portfolio.scss';
import foto from '../../img/conchori.jpg';
import fargol from '../../img/fargol1.jpg';
import seisd from '../../img/6d.jpg';

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
          title: 'UNO',
          modalpic: seisd,
          picture: fargol
        },
        {
          title: 'DOS',
          modalpic: fargol,
          picture: fargol
        },
        {
          title: 'TRES',
          modalpic: seisd,
          picture: fargol

        },
        {
          title: 'CUATRO',
          modalpic: seisd,
          picture: fargol
        },
        {
          title: 'CINCO',
          modalpic: seisd,
          picture: fargol

        },
        {
          title: 'SEIS',
          modalpic: seisd,
          picture: fargol
        },
      ]


      {/*const modal = (cards.map((card, index) =>
                    <Modal isOpen={true}  onRequestClose={this.closeModal} style={customStyles}>
                      <button className="close modalButton" onClick={this.closeModal}><i className="fa fa-times"></i></button>
                      <img src={card.modalpic} alt="" className="img-fluid modalPic"/>
                    </Modal>
                  )
                )*/}
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
                    <h1>{card.title}</h1>
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