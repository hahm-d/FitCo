import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import MainScreen from '../containers/MainScreen';
import FindScreen from '../containers/FindScreen';

import FollowingNavigator from './FollowingNavigator';
import ProfileNavigator from './ProfileNavigator';


const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarLabel: 'Find',
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={FollowingNavigator}
        options={{
          tabBarLabel: 'Following',
          tabBarIcon: ({ color }) => (
            <Icon name="people-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;
