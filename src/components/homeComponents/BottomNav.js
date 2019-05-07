import React from 'react';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'sticky',
    bottom: 0,
    backgroundColor: '#fff',
    height: '50px',
    position:"-webkit-sticky"
  },
  button: {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none'
  }
};

class BottomNav extends React.Component {
  state = {
    value: 'recents',
  };

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div value={value} onChange={this.handleChange} style={styles.root}>
        <i style={{color: 'black'}} className="fas fa-home"></i>
        <i className="fas fa-search"></i>
        <i className="far fa-plus-square"></i>
        <i className="far fa-heart"></i>
        <button style={styles.button} onClick={this.logout}><i className="far fa-user"></i></button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, {logout})(BottomNav);

