import React, {Component} from 'react'


export default class TopFeedNavBar extends Component {
  render() {
    return (
      <div style={styles.root}>
        <p><i style={{fontSize:'120%'}} className="fas fa-camera"></i></p>
        <p className="logo" style={{color: 'black'}}>iSocial</p>
        <p>
        <i style={{fontSize:'120%'}} className="fas fa-plus"></i>
        <i style={{fontSize:'120%'}} className="fas fa-user"></i>
        </p>
      </div>
    )
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