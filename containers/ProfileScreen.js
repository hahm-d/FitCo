import React from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import {validateUser, signOutUser} from '../actions/userActions';
import {fetchUserPosts, selectPost} from '../actions/postActions';
import { fetchFollowers } from '../actions/followActions';
import {deleteToken} from '../actions/tokenActions';
import CoachPosts from "../components/CoachPosts";
import styles from '../assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };


  componentDidMount(){
    const { token, users, fetchUserPosts, validateUser, fetchFollowers } = this.props;
    validateUser(token.authToken)
    fetchUserPosts(users.currentUser.id, token.authToken)
    fetchFollowers(users.currentUser.id, token.authToken)
  }


  componentDidUpdate(prevProps) {
    const { token, users, fetchUserPosts, fetchFollowers } = this.props;
    if (users.currentUser !== prevProps.users.currentUser) {
      fetchUserPosts(users.currentUser.id, token.authToken)
      fetchFollowers(users.currentUser.id, token.authToken)
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
    const { users, posts, follows } = this.props;
    const postsCount = posts.user_posts ? posts.user_posts.length : 0 
    const followerCount = follows.followers ? follows.followers.length : 0 
 
    return (
          <View>
            <ImageBackground
            source={require('../assets/images/bg1.png')}
            style={styles.bg2}
            ></ImageBackground>
      <ScrollView>
            <>
          {users.isLoading ?
                    <ActivityIndicator size="small"/>
                : 
          [
          <View>
            <UserDetails
              username={users.currentUser.username}
              email={users.currentUser.email}
              instagram={users.currentUser.instagram}
              twitter={users.currentUser.twitter}
              description={users.currentUser.description}
              image={users.currentUser.image}
              flag={users.currentUser.flag}
              editProfile={this.editProfile}
              onPressSignOut={this.onPressSignOut}
              postCount={postsCount}
              followerCount={followerCount}
            />
          {users.currentUser.flag === true ?  
            <View >
              <View style={styles.userSocialSection}>
                <TouchableOpacity style={styles.userProfileRow2}
                      onPress={this.addPost}>
                  <Icon name="add-circle-outline" size={30}/>
                  <Text style={{color:"#777777", 
                                marginLeft: 10, 
                                marginTop: 8, 	
                                fontSize: 14,
                                fontWeight: 'bold'}}>
                    Add Post
                    </Text>
                </TouchableOpacity>
              </View>
              {posts && <CoachPosts
                permission={true}
                posts={posts.user_posts}
                onPress={this.onPressPost}
                loading={posts.isloading}
              />}
            </View>
          :
            null
          }
          </View>
          ]
        }
        </>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {

  return {
    users: state.users,
    posts: state.posts,
    follows: state.follows,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateUser: token => dispatch(validateUser(token)),
    fetchUserPosts: (id, token) => dispatch(fetchUserPosts(id, token)),
    onSelectPost: postId => dispatch(selectPost(postId)),
    fetchFollowers: (id, token) => dispatch(fetchFollowers(id, token)),
    signOutUser: () => dispatch(signOutUser()),
    deleteToken: () => dispatch(deleteToken())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);