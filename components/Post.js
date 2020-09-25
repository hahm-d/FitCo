import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, Modal, Alert, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import Video from 'react-native-video';


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

  render() {
    const { title, content, likes, views, image, video, url } = this.props;
    const { modalVisible } = this.state;
    return (
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
        {image.cloudinary ? 
            <Image source={ {uri: image.cloudinary}} style={styles.image} />
          :
            null 
        }
        {video.cloudinary ? 
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
        <Text >{content}</Text>
        <Text style={styles.text}>likes: {likes}</Text>
        <Text style={styles.text}>views: {views}</Text>
        <TouchableOpacity
          style={styles.postCommentContainer}
          onPress={this.onPressComment}> 
          <Text style={styles.postCommentContainer}> View Comments </Text>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
    fontSize: 15
  },
  postCommentContainer: {
    marginTop: 5,
    alignSelf: "flex-end",
    flexDirection: "row"
  },
  postCommentIcon: {
    color: "black",
    marginRight: 5
  },
  postCommentLink: {
    color: "black"
  },
  nameStyle: {
    paddingTop: 10,
    paddingBottom: 7,
    color: '#363636',
    fontSize: 30
  },
  image: {
    borderRadius: 8,
    width: 200,
    height: 200,
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
    marginTop: 25, 
    backgroundColor: '#fff',
  },
  modalView: {
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    width: 400,
    height: 650,
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
    padding: 8,
    elevation: 20
  },
  modalButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 8,
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
