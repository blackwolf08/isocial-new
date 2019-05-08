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
    <div>
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.root}>
        <button type="button" style={{outline:'none', backgroundColor:'transparent', border: 'none'}} data-toggle="modal" data-target="#exampleModal"><Avatar alt={ name } src="https://picsum.photos/100" className={classes.Avatar} /></button>
        <p>{ name }</p>
      </div>
    </div>
  );
}


export default withStyles(styles)(ImageAvatars);