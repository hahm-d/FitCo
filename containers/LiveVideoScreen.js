import React from 'react';
import Video from 'react-native-video';
import {
    StyleSheet,
    View
} from 'react-native';
class LiveVideoScreen extends React.Component {
    static navigationOptions = {
      title: 'LiveVideoScreen',
    };

render(){
    return(
            <View style={styles.container}>
                <Video 
                source={{ uri:'https://stream.mux.com/FBFgltZZSlWzD0083Wnbt9KvSwP1jn9TV02rpwbJcJ67Q.m3u8'}} 
                ref={(ref) => {
                    this.player = ref
                }}  // Store reference
                onBuffer={this.onBuffer} // Callback when remote video is buffering
                onError={this.videoError} // Callback when video cannot be loaded
                style={styles.backgroundVideo} />
            </View>
    )
}}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#000000'
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
})

export default LiveVideoScreen;