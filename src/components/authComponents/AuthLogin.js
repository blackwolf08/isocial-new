import React, { Component } from 'react'
import BottomLoginBar from './BottomLoginBar'
import Spinner from '../../images/index'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class AuthLogin extends Component {

    state ={
        isDisabled : true,
        email: '',
        password: '',
        isLoading: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.setState({
            email: this.state.email.toLowerCase
        })
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state)
        .then(() => {
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })
            this.props.history.push("/feed");
        })
        .catch(() => {
        return;
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if(this.state.email.length>1 && this.state.password.length>1)
        {
            this.setState({
                isDisabled: false
            })
        }
    }


  render() {

    if(this.state.isLoading){
        if(this.props.error.length)
        {
        this.setState({
            isLoading: false,
            email: '',
            password: ''
        })
        }
        return <Spinner />
    }

    return (
      <div style={styles.root}>
        <h1 style={{color:'black'}} className="logo" ><Link style={{color: "black"}} to="/">iSocial</Link></h1>
        <button type="button" style={styles.button} className="btn btn-primary"><i className="fab fa-facebook-square"></i> Continue with Facebook</button>
        <div style={styles.or}>
            <hr style={styles.hr} />
            <span style={styles.orText}>OR</span>
            <hr style={styles.hr} />
        </div>
        <form style={styles.form} onSubmit={this.handleSubmit}>
            {this.props.error.length>0 && (
                <p style={{color:'red', textAlign:'center'}}>{this.props.error}</p>
              )}
            <input value={this.state.email} onChange={this.handleChange} name="email" style={styles.input} type="text" placeholder="Email" />
            <input value={this.state.password} onChange={this.handleChange} name="password" style={styles.input} type="password" placeholder="Password" />
            <button disabled={this.state.isDisabled} type="submit" style={styles.button} className="btn btn-primary">Login</button>
        </form>
        <a href="/" style={{marginTop: '10px'}}>Forgot Password?</a>
        <BottomLoginBar />
      </div>
    )
  }
}

const styles = {
    root: {
        height: '100%',
        width: '100%',
        padding:'20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
        marginTop: '20px'
    },
    form: {
        width: '100%'
    },
    input: {
        width: '100%',
        outline: 'none',
        border: 'none',
        margin: '10px 0 10px 0',
        backgroundColor: '#eee',
        padding: '8px',
        borderRadius: '5px'
    }
}

const mapStateToProps = state =>({
    error: state.error.err
  })

export default connect(mapStateToProps)(AuthLogin);