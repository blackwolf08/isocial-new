import React, {Component} from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


export default class TopFeedNavBar extends Component {

  state = {
    photo: false,
    dispay: true,
    dataUri: ''
  }

  onTakePhoto =  (dataUri) => {
    this.setState({
      photo: false,
      dispay: true,
      dataUri
    })
    this.props.clickedImage(dataUri);
  }

  handleClick = ()=> {
    this.setState({
      photo: true,
      dispay: false
    })

  }

  render() {

    if(this.state.photo){
      
      console.log(this.state.photo)
      return (
        <div style={{height:'100%',width:'100%',position:'absolute',zIndex:'999999'}}>
          <Camera
            style={{height:'100%',width:'100%'}}
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          />
        </div>
      )
    }

    if(this.state.dispay) {
      console.log(this.state.photo)
      return (
        <div style={styles.root}>
            <p><i onClick={this.handleClick} style={{fontSize:'120%'}} className="fas fa-camera"></i></p>
            <p className="logo" style={{color: 'black'}}>iSocial</p>
            <p>
              <i style={{fontSize:'120%'}} className="fas fa-plus"></i>
              <i style={{fontSize:'120%'}} className="fas fa-user"></i>
            </p> 
        </div>
      )
    }
  }
}


const styles ={
    root:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        backgroundColor: '#fff',
        height: '50px',
        borderBottom: '1px solid #d2d2d2',
        padding: '10px',
        paddingTop: '25px',
        zIndex: '10000'
    }
}