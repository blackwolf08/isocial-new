import React, { Component } from 'react'
import TopFeedNavBar from './TopFeedNavBar'
import BottomNav from './BottomNav'
import FeedCard from './FeedCard'
import { connect } from 'react-redux'
import { fetchPhotos, fetchPosts, fetchUsers } from '../../actions/fetchPosts'
import ImageAvatars from './ImageAvatars'

class Feed extends Component {

    componentWillMount(){
        this.props.fetchPhotos();
        this.props.fetchPosts();
        this.props.fetchUsers();
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
        return (
            <div key={card.id}>
                <FeedCard title={card.title} image={card.url} name={card.title.split(' ')[0]} />
            </div>
        )
    })

    return (
      <div style={styles.root}>
        <TopFeedNavBar />
        <div style={styles.avatars}>
            {people}
        </div>
        <div>
            {peopleCards}
        </div>
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
        overflowY: 'Hidden'
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
    users: state.fetch.users
})

export default connect(mapStateToProps, { fetchPhotos, fetchPosts, fetchUsers })(Feed);