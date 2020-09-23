import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

class Post extends Component {

  render() {
    const { title, content, likes, views, image } = this.props;

    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{title}</Text>
        <Image source={ {uri: image.cloudinary}} style={styles.image} />
        <Text>{content}</Text>
    <Text>likes: {likes}</Text>
    <Text>views: {views}</Text>
          
          <Text style={styles.postCommentContainer}> See comment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 10
  },
  postTitle: {
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
