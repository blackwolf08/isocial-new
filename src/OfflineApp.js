import React, { Component } from 'react'

export default class OfflineApp extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1 style={{color: 'black', textAlign:'center'}}>OOPS!</h1>
        <p style={{color: '#1abc9c', textAlign:'center'}}>Turn on your internet connection!</p>
        <button className="btn btnlg btn-success"><a href="/feed" style={{color:'white'}}>RECONNECT</a></button>
      </div>
    )
  }
}

const styles = {
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}