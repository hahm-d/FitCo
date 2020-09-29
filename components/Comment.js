import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import moment from 'moment';

class Comment extends Component {
  render() {
    const { username, comment, created_at } = this.props;
    const format_date = moment(Date(created_at)).format('H:mma   MM-DD-YYYY')
    return (
      <View style={styles.commentContainer}>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Comment: {comment}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentTime}>Time: {format_date}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentUserName}>User: {username}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'lightgray'
  },
  commentField: {
    marginBottom: 10
  },
  commentLabel: {
    marginRight: 10,
    fontSize: 15,
  },
  commentUserName: {
    marginRight: 10,
    fontSize: 15,
    color: 'white'
  },
  commentTime: {
    marginRight: 10,
    opacity: 0.4
  }
});

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string
};

export default Comment;
