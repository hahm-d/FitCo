import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import MainScreen from '../containers/MainScreen';
import FindScreen from '../containers/FindScreen';
import FollowersNavigator from './FollowersNavigator';
import ProfileNavigator from './ProfileNavigator';


const Tab = createBottomTabNavigator();

const CoachTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: 'Main',
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
        name="Followers"
        component={FollowersNavigator}
        options={{
          tabBarLabel: 'Followers',
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

export default CoachTabScreen;
