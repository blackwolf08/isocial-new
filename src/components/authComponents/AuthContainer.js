import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BottomLoginBar from './BottomLoginBar'

export default class AuthContainer extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1 style={{color:'black'}} className="logo" ><Link style={{color: "black"}} to="/">iSocial</Link></h1>
        <p style={{textAlign:'center',marginTop: '20px'}}>Sign up to see photos and videos of friends</p>
        <Link style={styles.button} className="btn btn-primary" to="/login">Login</Link>
        <div style={styles.or}>
            <hr style={styles.hr} />
            <span style={styles.orText}>OR</span>
            <hr style={styles.hr} />
        </div>
        <Link style={styles.link} to="/signup">Sign up with email or phone number</Link>
        <BottomLoginBar />
      </div>
    )
  }
}

const styles = {
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px'
        },
    logo: {
        height: '100px',
        width: '200px'
    },
    button: {
        width: '100%',
        marginTop: '20px'
    },
    or: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px'
    },
    hr: {
        width: '50px'
    },
    orText: {
        marginLeft: '10px',
        marginRight: '10px'
    },
    link: {
        marginTop: '20px',
        textDecoration: 'none'
    }
}