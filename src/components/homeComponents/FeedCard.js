import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';

const styles = {
  card: {
    Width: '100%',
    marginTop: '20px',
    boxShadow: 'none'
  },
  media: {
    objectFit: 'cover',
  },
};


class FeedCard extends Component {

    state = {
      isClicked: false,
      likeClass: "far fa-heart",
      color: 'black',
      show: false
    }


    liked = ()=>{
      if(!this.state.isClicked)
      {
        this.setState({
          isClicked: !this.state.isClicked,
          likeClass: "fas fa-heart",
          color: 'red',
          show: true
        })
        setTimeout(()=>{
          this.setState({
            show: false
          })
        },1000)
      }
      else{
        this.setState({
          isClicked: false,
          likeClass: "far fa-heart",
          color: 'black'
        })
      }
    }

    likedDbl = ()=>{
      if(!this.state.isClicked)
      {
        this.setState({
          isClicked: !this.state.isClicked,
          likeClass: "fas fa-heart",
          color: 'red',
          show: true
        })
        setTimeout(()=>{
          this.setState({
            show: false
          })
        },1000)
      }
      else{
        this.setState({
          isClicked: false,
          likeClass: "far fa-heart",
          color: 'black'
        })
      }
    }
  render() {
    const { classes }  = this.props;
    return (
        <Card className={classes.card}>
        <CardActionArea disableRipple  onDoubleClick={this.likedDbl}>
          <CardMedia
            component="img"
            alt={this.props.name}
            className={classes.media}
            height="140"
            image="http://lorempixel.com/600/400"
            title={this.props.title}
            style={{backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px',position:'relative'}}
          />
          {this.state.show &&(
            <div className="animated heartBeat" style={{position: 'absolute', top:'90px',left:'120px', zIndex:'99999', fontSize:'400%', color:'#eee'}}>
              <i style={{fontSize: '200%', color: '#eee'}} className="animated heartBeat fas fa-heart"></i>
            </div>
          )}
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.liked}>
              <i style={{fontSize: '200%', color: this.state.color}} className={this.state.likeClass}></i>
          </Button>
          <Button size="small" color="primary">
              <i style={{fontSize: '200%', color: 'black'}} className="far fa-comment"></i>
          </Button>
        </CardActions>
          <CardContent>
          <div style={{display: 'flex', alignItems:'left', flexDirection:'column'}}>
              <div style={{display:'flex'}}>
                <Avatar src="https://picsum.photos/50" />
                <h5 style={{margin: '5px', color: 'black'}}>{this.props.name}</h5>
              </div>
              <a style={{color:'#a9a9a9'}} href="/feed">View all comments</a>
              <div style={{display:'flex', alignItems:'baseline'}}>
                <h6 style={{color:'black'}}>Sunny</h6><span style={{marginLeft:'6px'}}>Beautiful...</span>
              </div>
          </div>
          <p>6 hours ago</p>
          </CardContent>
          <hr />
      </Card>
    )
  }
}




export default withStyles(styles)(FeedCard);