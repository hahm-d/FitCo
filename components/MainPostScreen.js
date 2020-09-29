import React from "react";
import { TouchableOpacity, TextInput, Button, View, Text, StyleSheet, Image, Modal, Alert, TouchableHighlight } from "react-native";
import { addComment } from '../actions/commentActions';
import { connect } from 'react-redux';

class MainPostScreen extends React.Component {

  state = {
    modalVisible: false,
    comment: null
  }

changeHandler = (name) => (text) => {
    this.setState({[name]: text});
}

onPressComment = (comment) => {
  const { posts, currentUser, addComment, token} = this.props;
  const newCommentObj = {
    post_id: posts.id,
    username: currentUser.username,
    comment: comment
  }
  addComment(newCommentObj, token.authToken)
  this.setModalVisible(false)
  this.setState({comment: null})
};


  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { title, content, likes, views, image } = this.props;
    const { modalVisible } = this.state;
    return (
      <View >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View> 
                <Text style={{size: 20}}>Add Comment</Text>
                      <TextInput
                      editable={true}
                      multiline={true}
                      style={styles.textInput}
                      value={this.state.comment}
                      placeholder="comment"
                      type='comment'
                      onChangeText={this.changeHandler("comment")}
                      placeholderTextColor={'darkgray'}
                      />  
                <TouchableOpacity>
                    <Button title="Submit" onPress={() => this.onPressComment(this.state.comment)} />
                </TouchableOpacity>
            <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.exitButton}> cancel </Text>
              </TouchableHighlight>
              </View>            
          </View>
        </View>
        </Modal>

        <Text style={styles.postTitle}>{title}</Text>
        {image ? 
            <Image source={ {uri: image.cloudinary}} style={styles.image} />
          :
            <Text>no avatar</Text>
          }
        <Text>{content}</Text>
        <Text>likes: {likes}</Text>
        <Text>views: {views}</Text>
          <TouchableHighlight 
            onPress={() => this.setModalVisible(true)} 
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}>
            <Text style={styles.textStyle}>Add Comment</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postTitle: {
    marginTop: 20,
    marginBottom: 5
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
  image: {
    borderRadius: 8,
    width: 80,
    height: 80,
    margin: 2  
  },  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    width: 350,
    height: 350,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
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
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    padding: 8,
    marginTop: 22,
    paddingLeft: 10,
    color: '#05375a',
  },
  textbox:{
  }
});

function mapStateToProps(state){
  return {
          currentUser: state.users.currentUser,
          posts: state.posts.selectedPost,
          comments: state.comments, 
          token: state.token
         }
}

function mapDispatchToProps(dispatch){
  return { addComment: (commentObj, token) => dispatch(addComment(commentObj, token)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPostScreen);