import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, Modal, Alert, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import Video from 'react-native-video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
class Post extends Component {
  
  state = {
    modalVisible: false,
    video_url: null 
  }


  setModalVisible = (visible, url) => {
    this.setState({ 
      modalVisible: visible,
      video_url: url });
  }


  onPressComment = () => {
    const { onPress, id, title, content, likes, views, image } = this.props;
    onPress && onPress({ post: { id, title, content, likes, views, image } });
  };

  onPressLike = () => {
    //finish this
  }

  render() {
    const { title, content, likes, views, image, video, url } = this.props;
    const { modalVisible } = this.state;
    return (
      <Animatable.View  
      delay={1000}                
      animation="fadeInLeft"
      duraton="9000">
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.rightView}>
            <View style={styles.modalView}>
              <Video
                repeat
                source={{ uri: this.state.video_url}}
                resizeMode="cover"
                muted
                rate={1.0}
                style={StyleSheet.absoluteFill}/>
            </View>
            <Text style={styles.nameStyle}>{title}</Text>
            <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(false, null);
                }}
              >
                <Text style={styles.exitButton}> x </Text>
              </TouchableHighlight>
          </View>
        </Modal>


        <Text style={styles.nameStyle}>{title}</Text>
        {image ? 
            <Image source={ {uri: image.cloudinary}} style={styles.image} />
          :
          <Image source={require('../assets/images/logo1.png')} style={styles.image} />
        }
        {video ? 
            <TouchableHighlight 
            onPress={() => this.setModalVisible(true, video.cloudinary)} 
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}>
            <Text style={styles.textStyle}>Play Video</Text>
            </TouchableHighlight>
           :
           null
        }
        {url ? 
            <TouchableHighlight 
            onPress={() => this.setModalVisible(true, url)} 
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}>
            <Text style={styles.textStyle}>Play Video</Text>
            </TouchableHighlight>
           :
            null
        }
          <Text style={styles.text}>{content}</Text>
          <View style={styles.textAll}>
              <Text style={styles.textDisplay}>likes: {likes}</Text>
              <Text style={styles.textDisplay}>views: {views}</Text>
          </View>
          <View style={styles.postCommentContainer}>
          <FontAwesome 
              name="thumbs-up"
              size={15}
            />
          <TouchableOpacity
            onPress={this.onPressLike}> 
            <Text style={{marginRight: 50}}> Like </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onPressComment}> 
            <Text style={{marginLeft: 110}}> Comments </Text>
          </TouchableOpacity> 
          <FontAwesome 
              name="comment"
              size={15}
            />
          </View> 
      </View>
      </Animatable.View> 
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 10,
    opacity: 0.5,
    textAlign: 'justify',
    lineHeight: 20
  },
  textDisplay: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 80,
    marginLeft: 70
  },
  textAll:{
    justifyContent: "space-between",
    flexDirection: "row",
  },
  postCommentContainer: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1
  },
  postCommentIcon: {
    color: "black",
    marginRight: 5
  },
  postCommentLink: {
    color: "black"
  },
  nameStyle: {
    paddingTop: 25,
    paddingBottom: 12,
    color: '#363636',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    borderRadius: 8,
    width: 300,
    height: 300,
    margin: 2
  },  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22, 
    backgroundColor: '#fff',
  },
  rightView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: 'right',
    backgroundColor: '#fff',
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    width: 400,
    height: 700,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    elevation: 20
  },
  modalButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 20,
    marginBottom: 30 
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 20,
    marginLeft: 20
  },
  exitButton: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 20
  }
});

Post.propTypes = {
  onPress: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  disabled: PropTypes.bool,
  commentsCount: PropTypes.number
};

export default Post;
