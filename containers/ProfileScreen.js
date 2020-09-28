import React from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import {validateUser, signOutUser} from '../actions/userActions';
import {fetchUserPosts, selectPost} from '../actions/postActions';
import {deleteToken} from '../actions/tokenActions';
import CoachPosts from "../components/CoachPosts";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };


  componentDidMount(){
    const { token, users, fetchUserPosts, validateUser } = this.props;
    validateUser(token.authToken)
    fetchUserPosts(users.currentUser.id, token.authToken)
  }


  componentDidUpdate(prevProps) {
    const { token, users, fetchUserPosts } = this.props;
    if (users.currentUser !== prevProps.users.currentUser) {
      fetchUserPosts(users.currentUser.id, token.authToken)
    }
  }


  addPost = () => {
    this.props.navigation.navigate("CreatePost");
  };

  editProfile = () => {
    this.props.navigation.navigate("EditProfile");
  };


  onPressPost = ({ post }) => {
    const { navigation, onSelectPost } = this.props;
    onSelectPost(post);
    navigation.navigate("PostCommentsScreen", { title: post.title });
  };

  onPressSignOut = () => {
    this.props.signOutUser()
    this.props.deleteToken()
  };

  render() {
    const { users, posts } = this.props;
    return (
      <ScrollView>
            <>
            {users.isLoading ?
                    <ActivityIndicator size="small"/>
                :
          <View>
            {users.currentUser && 
            <UserDetails
              username={users.currentUser.username}
              email={users.currentUser.email}
              instagram={users.currentUser.instagram}
              twitter={users.currentUser.twitter}
              description={users.currentUser.description}
              status={users.currentUser.status}
              image={users.currentUser.image}
            />}
            <Button title="Update Profile" onPress={this.editProfile}/>
            <Button title="Add Post" onPress={this.addPost}/>
            <Button title="Sign out" onPress={this.onPressSignOut} />
            {posts && <CoachPosts
              posts={posts.user_posts}
              onPress={this.onPressPost}
              loading={posts.isloading}
              />}
          </View>
        }
        </>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {

  return {
    users: state.users,
    posts: state.posts,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateUser: token => dispatch(validateUser(token)),
    fetchUserPosts: (id, token) => dispatch(fetchUserPosts(id, token)),
    onSelectPost: postId => dispatch(selectPost(postId)),
    signOutUser: () => dispatch(signOutUser()),
    deleteToken: () => dispatch(deleteToken())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);