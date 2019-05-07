import React, { Component } from 'react';
import '../../App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import SignUp from './SignUp'
import AuthLogin from './AuthLogin';
import AuthContainer from './AuthContainer';
import Feed from '../homeComponents/Feed'
import withAuth from "../hocs/withAuth"
import { connect } from 'react-redux'
import {authUser} from '../../actions/auth';


class Main extends Component {
  render() {
    const {authUser} = this.props;
    return (
      <Switch>
          <Route exact path="/" component={AuthContainer} />
          <Route  path="/login" render={props =>(
            <AuthLogin signin onAuth={authUser} {...props}/>
          )} />
          <Route  path="/signup" render={props =>(
            <SignUp signup onAuth={authUser} {...props}/>
          )} />
          <Route  path="/feed" component={withAuth(Feed)} />
      </Switch>
    )
  }
}


  function mapStateToProps(state){
    return {
      currentUser: state.currentUser,
    };
  }

  export default withRouter(connect(mapStateToProps, {authUser})(Main));