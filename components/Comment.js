import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class Comment extends Component {
  render() {
    const { username, comment, created_at } = this.props;

    return (
      <View style={styles.commentContainer}>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Name:</Text>
          <Text>{username}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Time:</Text>
          <Text>{created_at}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Comment:</Text>
          <Text>{comment}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    marginVertical: 10
  },
  commentField: {
    marginBottom: 10
  },
  commentLabel: {
    marginRight: 10
  }
});

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string
};

export default Comment;
