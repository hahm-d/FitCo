import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import {fetchCoachPosts} from '../actions/postActions';
import CoachDetails from "../components/CoachDetails";
import CoachPosts from "../components/CoachPosts";
import Spinner from "../components/Spinner";

/**
 * Screen that shows detailed data of the selected friend
 */

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
    console.log(this.props.selectedUser)
/*     const {
      onFetchCoachPosts,
      selectedUser
    } = this.props;
    onFetchCoachPosts(selectedUser.user.id) */
  };

/*   onPressPost = ({ post }) => {
    const { navigation, onSelectPost } = this.props;
    onSelectPost(post.id);
    navigation.navigate("UserPostDetails", { title: post.title });
  }; */

  render() {
   const { posts, users, selectedUser } = this.props; 
   console.log(this.props.selectedUser) 
    return (
/*       <ScrollView>
        <Spinner loading={users.loading} />
        {!users.loading && users.selectedUser && (
          <View>
            <CoachDetails
              username={users.selectedUser.name}
              status={users.selectedUser.status}
            />
            <CoachPosts
              posts={posts.posts}
              loading={posts.loading}
            />
          </View>
        )}
      </ScrollView> */
      <View>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>COACH DETAIL PAGE</Text>
        <Text>{selectedUser}</Text>
        </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.selectedUser)
  return {
    users: state.users.users,
    posts: state.posts,
    selectedUser: state.selectedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCoachPosts: userId => dispatch(fetchCoachPosts(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachDetailScreen);
