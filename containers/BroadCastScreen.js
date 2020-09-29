import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { NodeCameraView } from 'react-native-nodemediaclient';
import Icon from 'react-native-vector-icons/Ionicons';

class BroadCastScreen extends React.Component {
  static navigationOptions = {
    title: 'Push',
  };

 
  state = { 
      'flashenable': false 
    };
  

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#333' }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <NodeCameraView
          style={{ flex: 1 }}
          ref={(vb) => { this.vb = vb }}
          outputUrl={"rtmp://live.mux.com/app/79a49661-3e0e-cd4a-db36-c394c546b81a"}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 1, bitrate: 500000, profile: 1, fps: 15, videoFrontMirror: false }}
          smoothSkinLevel={3}
          autopreview={true}
          onStatus={(code, msg) => {
            console.log("onStatus=" + code + " msg=" + msg);
          }}
        />
        <View
          offsetY={32}
          offsetX={16}
          size={32}
          hideShadow={true}
          flexDirection={'row'}
          marginBottom={15}
          justifyContent={'space-around'}
        >
          <TouchableOpacity onPress={() => { this.vb.start() }}>
            <Icon name="videocam-outline" style={styles.actionButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.vb.switchCamera();
            this.state.flashenable = false;
          }}>
          <Icon name="camera-reverse-outline" style={styles.actionButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.state.flashenable = !this.state.flashenable;
            this.vb.flashEnable(this.state.flashenable);
          }}>
            <Icon name="sunny-outline" style={styles.actionButtonIcon} />
          </TouchableOpacity>
        </View>
      </View >
    );
  }

  componentWillUnmount() {
    this.vb.stop();
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 50,
    color: 'white'
  },
});

export default BroadCastScreen;