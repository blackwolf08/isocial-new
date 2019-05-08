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
      <div className="clickable zindex" style={styles.modal}>
        <div className="modal fade zindex" id="exampleModal" tabIndex="-1" role="dialog" ariaLabelledBy="exampleModalLabel" ariaHidden="true">
        <div  className="modal-dialog mydialog zindex" role="document">
            <div className="modal-content zindex">
                <div className="mymodal zindex">
                  
                </div>
                <button position="absolute"type="button" className="close zindex" dataDismiss="modal" ariaLabel="Close">
                <span className="zindex" ariaHidden="true">&times;</span>
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