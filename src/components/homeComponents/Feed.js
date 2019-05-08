import React, { Component } from 'react'
import TopFeedNavBar from './TopFeedNavBar'
import BottomNav from './BottomNav'
import FeedCard from './FeedCard'
import { connect } from 'react-redux'
import { fetchPhotos, fetchPosts, fetchUsers } from '../../actions/fetchPosts'
import ImageAvatars from './ImageAvatars'
import Spinner from '../../images/index'

class Feed extends Component {
    state ={
        dataUri: [],
        count: 0
    }

    componentWillMount(){
        this.props.fetchPhotos();
        this.props.fetchPosts();
        this.props.fetchUsers();
        console.log(this.props.currentUser)
    }

    clickedImage = (uri) => {
        this.setState({
            dataUri: [...this.state.dataUri, uri]
        })
    }


  render() {


    let people = this.props.users.map((name)=>{
        return (
        <div key={name.id} style={{margin: '5px'}}>
            <ImageAvatars name={name.username} />
        </div>
        );
    })

    let peopleCards = this.props.photos.map((card)=>{
        console.log(card.url)
        return (
            <div key={card.id}>
                <FeedCard title={card.title} image="http://lorempixel.com/600/400" name={card.title.split(' ')[0]} />
            </div>
        )
    })

    if(this.props.isLoading)
    {
        return <Spinner />
    }
    
    return (
        
      <div style={styles.root}>

        <TopFeedNavBar clickedImage={this.clickedImage} />
        <div className="zindex"  style={styles.avatars}>
            {people}
        </div>
        <div>
            {peopleCards}
        </div>
        {this.state.dataUri.length && (
            this.state.dataUri.map((n)=>{
                return (
                    <div>
                        <FeedCard title="My new photo" image={n} name={this.props.currentUser.user.username} />
                    </div>
                )
            })
        )}
        <BottomNav />
      </div>
    )
  }
}

const styles = {
    avatars: {
        display: 'flex',
        overflowX: 'scroll',
        backgroundColor:'#f2f2f2',
        height: '80px',
        overflowY: 'Hidden',
        marginTop: '50px',
        zIndex:'10000000'
    },
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll'
    }
}

const mapStateToProps = state =>({
    posts: state.fetch.posts,
    photos: state.fetch.photos,
    users: state.fetch.users,
    isLoading: state.fetch.isLoading,
    currentUser: state.currentUser
})

export default connect(mapStateToProps, { fetchPhotos, fetchPosts, fetchUsers })(Feed);