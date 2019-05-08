import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '100%',
    position              : 'relative',
    height                : '80%'
  }
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    zIndex: '10000',
  },
  dialog: {

  }
};



export default class ImageAvatars extends Component {

  state = {
    name: this.props.name,
    modalIsOpen: false
  }

  componentWillMount(){
    if(this.props.name.length > 6)
    {
      let name = this.props.name.slice(0, 6);
      name = name + '...'
      this.setState({
        name
      })
    }
  }


  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button style={{position:'absolute', top: 0,right: 0, backgroundColor:'#f2f2f2'}} type="button" class="close" onClick={this.closeModal}>
            <span >&times; </span>
          </button>
          <div className="mymodal animated fadeIn"></div>
        </Modal>

        <div style={styles.root}>
          <button type="button" onClick={this.openModal} style={{outline:'none', backgroundColor:'transparent', border: 'none'}}><Avatar alt={ this.state.name } src="https://picsum.photos/100" className="Avatar" /></button>
          <p>{ this.state.name }</p>
      </div>
      </div>
    )
  }
}







