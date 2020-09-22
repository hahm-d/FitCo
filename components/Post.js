import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class Post extends Component {
  onPressComment = () => {
    const { onPress, content, likes, title, views} = this.props;
    onPress && onPress({ post: { id, title, content, likes, views } });
  };

  render() {
    const { title, content, disabled, commentsCount, likes, views } = this.props;

    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text>{content}</Text>
    <Text>likes: {likes}</Text>
    <Text>views: {views}</Text>
        <TouchableOpacity
          style={styles.postCommentContainer}
          onPress={this.onPressComment}
          disabled={disabled}
        >
          <Text style={styles.postCommentLink}>{commentsCount} See comment</Text>
        </TouchableOpacity>
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
