import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    zIndex: '10000',
  },
  dialog: {

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
      <div style={styles.modal}>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div  className="modal-dialog mydialog" role="document">
            <div className="modal-content">
                <div className="mymodal">
                  
                </div>
                <button position="absolute" zIndex="999999" type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        </div>
      </div>
      <button type="button" style={{outline:'none', backgroundColor:'transparent', border: 'none'}} data-toggle="modal" data-target="#exampleModal"><Avatar alt={ name } src="https://picsum.photos/100" className={classes.Avatar} /></button>
      <p>{ name }</p>
    </div>
  );
}


export default withStyles(styles)(ImageAvatars);