import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchPostComments } from "../actions/commentActions";
import MainPostScreen from "../components/MainPostScreen";
import CommentsList from "../components/CommentsList";


class UserPostDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Post")
    };
  };

  componentDidMount() {
    const { onFetchPostComments, posts, token } = this.props;
    onFetchPostComments(posts.selectedPost.id, token.authToken);
  }

/*   componentDidUpdate(prevProps) {
    const { onFetchPostComments, comments, posts, token } = this.props;
    if (comments.comments !== prevProps.comments.comments) {
      onFetchPostComments(posts.selectedPost.id, token.authToken);
    }
  } */


  render() {
    const { comments, posts } = this.props;

    return (
      <ScrollView style={styles.container}>
        <MainPostScreen
          disabled={true}
          {...posts.selectedPost}
        />
        <CommentsList comments={comments.comments} loading={comments.isloading} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20
  }
})

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPostComments: (postId, token) => dispatch(fetchPostComments(postId, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostDetailsScreen);
