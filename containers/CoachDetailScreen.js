import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import {
  fetchUserPosts,
  selectPost
} from "../store/actions/index";
import UserDetails from "../components/UserDetails";
import UserPosts from "../components/UserPosts";
import Spinner from "../components/Spinner";

/**
 * Screen that shows detailed data of the selected friend
 */

class CoachDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const {
      onFetchUserPosts,
      users
    } = this.props;

    onFetchUserPosts(users.selectedUser.id);
  };

  onPressAlbum = ({ album }) => {
    const { navigation } = this.props;
    navigation.navigate("UserAlbum", { title: album.title, albumId: album.id });
  };

  onPressPost = ({ post }) => {
    const { navigation, onSelectPost } = this.props;
    onSelectPost(post.id);
    navigation.navigate("UserPostDetails", { title: post.title });
  };

  render() {
    const { albums, posts, todos, users } = this.props;

    return (
      <ScrollView>
        <Spinner loading={users.loading} />
        {!users.loading && users.selectedUser && (
          <View>
            <UserDetails
              initials={users.selectedUser.initials}
              name={users.selectedUser.name}
              email={users.selectedUser.email}
              address={users.selectedUser.address}
              phone={users.selectedUser.phone}
            />
            <UserPosts
              posts={posts.posts}
              onPress={this.onPressPost}
              loading={posts.loading}
            />
            <UserTodos todos={todos.todos} loading={todos.loading} />
          </View>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    onSelectPost: postId => dispatch(selectPost(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachDetailScreen);