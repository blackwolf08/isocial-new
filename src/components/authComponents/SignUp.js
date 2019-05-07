import React, { Component } from "react"
import { Link } from 'react-router-dom'
import TabSignUp from './TabSignUp'

export default class SignUp extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1 style={{color:'black'}} className="logo" >iSocial</h1>
        <TabSignUp />
        <Link to="/" className="btn btn-primary" style={{width: '80%'}}>Next</Link>
        <Link style={styles.button} className="btn btn-primary" to="/"><i class="fab fa-facebook-square"></i> Sign up with Facebook</Link>
        <span></span>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
}
