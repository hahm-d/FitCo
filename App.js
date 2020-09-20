import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './components/HomeScreen';
import SignInScreen from './components/SignInScreen';
import SignOutScreen from './components/SignOutScreen';
import RegisterScreen from './components/RegisterScreen';
import FollowingScreen from './containers/FollowingScreen';
import CoachDetailScreen from './containers/CoachDetailScreen'
import FindScreen from './containers/FindScreen';
import PostContainer from './containers/PostContainer';
import ProfileScreen from './containers/ProfileScreen';
import {validateUser} from './actions/userActions';


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
      <Drawer.Screen name="Coach Detail" component={CoachDetailScreen}/>
    </Drawer.Navigator>
  )
}

function TabNavigator(){
  return(
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Find" component={FindScreen}/>
    <Tab.Screen name="Following" component={FollowingScreen}/>
    <Tab.Screen name="Posts" component={PostContainer}/>
  </Tab.Navigator>
  )
}

class App extends Component {

retrieveData = async () => {
  try{
      const token = await AsyncStorage.getItem('userToken')
      console.log("Token:", token)
      if(token !==null){
        console.log(token)
        this.props.validateUser(token)
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
  return { validateUser: (token) => dispatch(validateUser(token)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);