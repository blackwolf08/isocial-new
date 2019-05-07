import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  let { name } = props;

  if(name.length > 6)
  {
    name = name.slice(0, 6);
    name = name + '...'
  }

  return (
    <div style={styles.root}>
      <Avatar alt={ name } src="https://picsum.photos/100" className={classes.Avatar} />
      <p>{ name }</p>
    </div>
  );
}


export default withStyles(styles)(ImageAvatars);