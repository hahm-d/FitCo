import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import SignInScreen from './components/SignInScreen';
import RegisterScreen from './components/RegisterScreen';
import FollowingScreen from './containers/FollowingScreen';
import PostContainer from './containers/PostContainer';
const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Sign in" component={SignInScreen}/>
    <Tab.Screen name="Register" component={RegisterScreen}/>
    <Tab.Screen name="Following" component={FollowingScreen}/>
    <Tab.Screen name="Posts" component={PostContainer}/>
  </Tab.Navigator>
  )
}

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    )
  }
};

export default App;
