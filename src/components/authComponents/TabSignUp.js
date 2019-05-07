import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }

const styles = theme => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
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
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class TabSignUp extends React.Component {
  state = {
    value: 0,
    direction: 'ltr'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          variant="fullWidth"
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Phone"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
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
            <input type="text" className="form-control" placeholder="Number" style={{backgroundColor: '#fff'}} />
            <p style={{marginTop: '20px', textAlign: 'center', color: '#a9a9a9'}}>You may recieve SMS containing your OTP for verification</p>
            </div>
          </TabContainer>
          <TabContainer dir={this.state.direction}>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}


export default withStyles(styles)(TabSignUp);