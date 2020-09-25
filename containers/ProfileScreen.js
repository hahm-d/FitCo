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
import {validateUser} from '../actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };
  
  componentDidUpdate(prevProps) {
    if (this.props.users.currentUser !== prevProps.users.currentUser) {
      console.log("fetch currentUser again if changes")
    }
  }


  addPost = () => {
    this.props.navigation.navigate("Add Post");
  };

  editProfile = () => {
    this.props.navigation.navigate("Edit Profile");
  };


  render() {
    const { users } = this.props;
    return (
      <ScrollView>
            <>
            {users.isLoading ?
                    <ActivityIndicator size="small"/>
                :
          <View>
            <UserDetails
              username={users.currentUser.username}
              email={users.currentUser.email}
              instagram={users.currentUser.instagram}
              twitter={users.currentUser.twitter}
              description={users.currentUser.description}
              status={users.currentUser.status}
              image={users.currentUser.image}
            />
            <Button title="Update Profile" onPress={this.editProfile}/>
            <Button title="Add Post" onPress={this.addPost}/>
            <Text>ADD User's Posts</Text>
          </View>
        }
        </>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {

  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateUser: (token) => dispatch(validateUser(token))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);