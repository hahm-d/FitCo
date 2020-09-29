import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import {fetchCoachPosts, selectPost} from '../actions/postActions';
import { fetchFollowers } from '../actions/followActions';
import CoachDetails from "../components/CoachDetails";
import CoachPosts from "../components/CoachPosts";


class CoachDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    }
  };

  async componentDidMount() {
    this.getCoachData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedUser !== prevProps.selectedUser) {
      this.getCoachData();
    }
  }

  getCoachData = () => {
    const {
      onFetchCoachPosts,
      selectedUser,
      token
    } = this.props;
    onFetchCoachPosts(selectedUser.id, token.authToken) 
    onFetchFollowers(selectedUser.id, token.authToken)
  };

  onPressPost = ({ post }) => {
    const { navigation, onSelectPost } = this.props;
    onSelectPost(post);
    navigation.navigate("PostCommentsScreen", { title: post.title });
  };


  render() {
    const { posts, selectedUser, follows } = this.props;
    const postsCount = posts.posts ? posts.posts.length : 0 
    const followerCount = follows.followers ? follows.followers.length : 0 
    return (
      <ScrollView>
        <>
        {selectedUser.isLoading ?
            <ActivityIndicator size="small"/>
            :
          <View>
            <CoachDetails
              username={selectedUser.username}
              email={selectedUser.email}
              instagram={selectedUser.instagram}
              twitter={selectedUser.twitter}
              description={selectedUser.description}
              status={selectedUser.status}
              image={selectedUser.image}
              postCount={postsCount}
              followerCount={followerCount}
            />
            <CoachPosts
              posts={posts.coach_posts}
              onPress={this.onPressPost}
              loading={posts.isloading}
            />
          </View>
        }
        </>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "white"
  }
});

const mapStateToProps = state => {
  return {
    selectedUser: state.users.selectedUser,
    posts: state.posts,
    follows: state.follows,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCoachPosts: (userId, token) => dispatch(fetchCoachPosts(userId, token)),
    onSelectPost: postId => dispatch(selectPost(postId)),
    onFetchFollowers: (id, token) => dispatch(fetchFollowers(id, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachDetailScreen);
