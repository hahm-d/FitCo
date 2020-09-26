import React, { Component } from 'react';
import {  View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './containers/HomeScreen';
import SignInScreen from './components/SignInScreen';
import RegisterScreen from './components/RegisterScreen';
import FollowingScreen from './containers/FollowingScreen';
import CoachDetailScreen from './containers/CoachDetailScreen'
import PostCommentsScreen from './containers/PostCommentsScreen';
import ProfileScreen from './containers/ProfileScreen';
import FindScreen from './containers/FindScreen';
import PostContainer from './containers/PostContainer';
import {validateUser} from './actions/userActions';
import { saveToken } from './actions/tokenActions';
import CreatePost from './components/CreatePost';
import EditProfile from './components/EditProfile';
import SplashScreen from './components/SplashScreen';

import AppNavigator from './navigation/AppNavigator'
import LoginStackNavigator from "./navigation/LoginStackNavigator";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function UserNavigator(){
  return(
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={TabNavigator}/>
      <Drawer.Screen name="Register" component={RegisterScreen}/>
      <Drawer.Screen name="Sign in" component={SignInScreen}/>
      <Drawer.Screen name="Coach Detail" component={CoachDetailScreen}/>
      <Drawer.Screen name="Add Post" component={CreatePost}/>
      <Drawer.Screen name="Edit Profile" component={EditProfile}/>
      <Drawer.Screen name="All Posts" component={PostContainer}/>      
      <Drawer.Screen name="Post Details" component={PostCommentsScreen}/>  
      <Drawer.Screen name="Splash" component={SplashScreen}/>         
    </Drawer.Navigator>
  )
}

function TabNavigator(){
  return(
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Find" component={FindScreen}/>
    <Tab.Screen name="Following" component={FollowingScreen}/>
    <Tab.Screen name="Profile" component={ProfileScreen}/>
  </Tab.Navigator>
  )
}

class App extends Component {

  state = {
    isSignedIn: false,
  };


retrieveData = async () => {
  try{
      const token = await AsyncStorage.getItem('userToken')
      if(token !==null){
        this.props.validateUser(token)
        this.props.saveToken(token)
        this.setState({isSignedIn: true})
      }
  }
  catch(error){
    console.log(error)
  }
}
async componentDidMount() {
  await this.retrieveData()
}

render(){
  return (
    <NavigationContainer>
      {this.props.token.authToken !== null ? (
        <UserNavigator />
      )
        :
        <HomeScreen/>  
      }
    </NavigationContainer>
  )
}
};

function mapStateToProps(state){
  return {
          users: state.users.currentUser,
          token: state.token
         }
}

function mapDispatchToProps(dispatch){
  return { 
    validateUser: (token) => dispatch(validateUser(token)), 
    saveToken: (token) => dispatch(saveToken(token)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);