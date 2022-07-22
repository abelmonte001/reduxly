import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// {video: state.currentVideo}
var mapStateToProps = (state) => ({
  video: state.currentVideo
});


// var mapDispatchToProps = (dispatch) => ({
//   changeVideo: (video) => {
//     dispatch(changeVideo(video));
//   }
// });

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;