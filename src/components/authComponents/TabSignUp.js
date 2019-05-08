import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import Spinner from '../../images/index'
import { connect } from 'react-redux'

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #000',
  },
  tabsIndicator: {
    backgroundColor: '#000',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#000',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#000',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#000',
    },
  },
  tabSelected: {
    color: '#000'
  },
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class TabSignUp extends React.Component {
  state = {
    value: 0,
    direction: 'ltr',
    username: '',
    email: '',
    password: '',
    isLoading: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleSubmit = (e)=> {
    e.preventDefault();
    this.setState({
      isLoading: true
    })
    const {username, password, email} = this.state
    const authType = this.props.signup ? "signup" : "signin";
    this.props.onAuth(authType, {username, password, email}).then(() => {
      this.setState({
        isLoading: false
      })
      this.props.history.push("/feed");
    })
    .catch((err) => {
      console.log(err.message)
      return;
    });

  }
  handleInputChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { value } = this.state;

    if(this.state.isLoading)
    {
      if(this.props.error.length)
    {
      this.setState({
        isLoading: false
      })
    }
      return <Spinner />
    }

    

    return (
      <div style={styles.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          style={{ root: styles.tabsRoot, indicator: styles.tabsIndicator }}
          variant="fullWidth"
        >
          <Tab
            disableRipple
            style={{ root: styles.tabRoot, selected: styles.tabSelected }}
            label="Phone"
          />
          <Tab
            disableRipple
            style={{ root: styles.tabRoot, selected: styles.tabSelected }}
            label="Email"
          />
        </Tabs>
        <SwipeableViews
          axis={this.state.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={this.state.direction}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" style={{color: 'blue'}}>+91</span>
            </div>
            <input type="text" className="form-control" placeholder="Number" style={{backgroundColor: '#fff'}} disabled />
            <p style={{marginTop: '20px', textAlign: 'center', color: '#a9a9a9'}}>You may recieve SMS containing your OTP for verification</p>
          </div>
          </TabContainer>
          <TabContainer dir={this.state.direction}>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              {this.props.error.length>0 && (
                <p style={{color:'red', textAlign:'center'}}>{this.props.error}</p>
              )}
              <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control mb-3" placeholder="Email" style={{backgroundColor: '#fff'}} />
              <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} className="form-control mb-3" placeholder="Username" style={{backgroundColor: '#fff'}} />
              <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control mb-3" placeholder="Password" style={{backgroundColor: '#fff'}} />
              <p style={{marginTop: '20px', textAlign: 'center', color: '#a9a9a9'}}>You may recieve email for verification</p>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Next</button>
            </div>
          </form>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  error: state.error.err
})

export default connect(mapStateToProps)(TabSignUp);