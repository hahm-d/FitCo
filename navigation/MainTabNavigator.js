import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
//import home, find, followers, followings, profile
import HomeScreen from '../containers/HomeScreen'
import MainScreen from '../containers/MainScreen'
import FindScreen from '../containers/FindScreen'
import FollowersScreen from '../containers/FollowersScreen'
import FollowingScreen from '../containers/FollowingScreen'
import ProfileScreen from '../containers/ProfileScreen'

const HomeStack = createStackNavigator({
    Home: HomeScreen,
  });

  HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };

  const LinksStack = createStackNavigator({
    Links: LinksScreen,
  });
  
  LinksStack.navigationOptions = {
    tabBarLabel: 'Links',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    ),
  };
  
  const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
  });
  
  SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };
  
  export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
  });