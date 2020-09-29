import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Post from "./Post";


class CoachPosts extends Component {
  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { posts, onPress, permission } = this.props;
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Posts</Text>
          <FlatList
            data={posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Post onPress={onPress} {...item} />}
            ItemSeparatorComponent={this.renderSeparator}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  noPostsDescription: {
    height: 140,
    justifyContent: "center"
  },
  postContainer: {
    marginVertical: 10
  },
  separator: {
    height: 1,
    width: "100%",
  }
});

CoachPosts.propTypes = {
  posts: PropTypes.array,
  onPress: PropTypes.func,
  loading: PropTypes.bool
};

export default CoachPosts;
