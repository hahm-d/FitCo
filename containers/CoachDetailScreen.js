import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import {fetchCoachPosts} from '../actions/postActions';
import CoachDetails from "../components/CoachDetails";
import CoachPosts from "../components/CoachPosts";


class CoachDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    }
  };

  componentDidMount() {
    this.getCoachData();
  }

  getCoachData = () => {
    const {
      onFetchCoachPosts,
      selectedUser
    } = this.props;
    onFetchCoachPosts(selectedUser.id, this.props.token.authToken) 
  };

  onPressPost = ({ post }) => {
    const { navigation, onSelectPost } = this.props;
    onSelectPost(post.id);
    navigation.navigate("UserPostDetails", { title: post.title });
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { posts, selectedUser } = this.props;
    console.log("coach posts: ", this.props.posts.coach_posts)
    return (
      <ScrollView>
        <>
        {selectedUser.isLoading ?
            <ActivityIndicator size="large" color="#0000ff"/>
            :
          <View>
            <CoachDetails
              username={selectedUser.username}
              email={selectedUser.email}
              instagram={selectedUser.instagram}
              twitter={selectedUser.twitter}
              description={selectedUser.description}
              status={selectedUser.status}
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
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCoachPosts: (userId, token) => dispatch(fetchCoachPosts(userId, token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachDetailScreen);
