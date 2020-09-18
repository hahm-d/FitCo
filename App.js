import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import HomeScreen from './components/HomeScreen';
import SignInScreen from './components/SignInScreen';
import SignOutScreen from './components/SignOutScreen';
import RegisterScreen from './components/RegisterScreen';
import FollowingScreen from './containers/FollowingScreen';
import PostContainer from './containers/PostContainer';
import ProfileScreen from './containers/ProfileScreen';
import getUserToken from './actions/userActions';
//componentDidMount
//fetch using token 

//if 

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function UserNavigator(){
  return(
    <Drawer.Navigator initialRouteName="Main">
    <Drawer.Screen name="Main" component={TabNavigator}/>
    <Drawer.Screen name="Profile" component={ProfileScreen}/>
    <Drawer.Screen name="Register" component={RegisterScreen}/>
    <Drawer.Screen name="Sign in" component={SignInScreen}/>
    <Drawer.Screen name="Logout" component={SignOutScreen}/>
    </Drawer.Navigator>
  )
}

function TabNavigator(){
  return(
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Following" component={FollowingScreen}/>
    <Tab.Screen name="Posts" component={PostContainer}/>
  </Tab.Navigator>
  )
}


class App extends Component {

  state={
    loggedIn: false
  }

async componentDidMount() {
    try{
        this.props.getUserToken()
        this.setState( {loggedIn: true})
      } catch (err){
        this.setState({ loggedIn: false})
      }
  }

  render(){
    console.log(this.state)
    return (
      <NavigationContainer>
    <UserNavigator />
      </NavigationContainer>
    )
  }
};

function mapStateToProps(state){
  return {
          currentUser: state.currentUser,
          isLoading: state.isLoading,
          flag: state.flag
         }
}

function mapDispatchToProps(dispatch){
  return { getUserToken: () => dispatch(getUserToken()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);