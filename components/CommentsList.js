import React from "react";
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import Comment from "./Comment";

class CommentsList extends React.Component {
  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { comments, loading } = this.props;

    return (
      <View>
        <Text style={styles.title}>Comments</Text>
        {loading ?
          <ActivityIndicator size="large" color="#0000ff"/>
                :
          <FlatList
            data={comments}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Comment {...item} />}
            ItemSeparatorComponent={this.renderSeparator}
          />
        }
        {!comments.length && !loading && (
          <View style={styles.noCommentsDescription}>
            <Text>No Comments found.</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 10
  },
  noCommentsDescription: {
    height: 140,
    justifyContent: "center"
  },
  separator: {
    height: 1,
    width: "100%"
  }
});

CommentsList.propTypes = {
  comments: PropTypes.array,
  loading: PropTypes.bool
};

export default CommentsList;
