import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import MainScreen from '../containers/MainScreen';
import FollowersScreen from '../containers/FollowersScreen';
import ProfileNavigator from './ProfileNavigator';
import BroadCastScreen from '../containers/BroadCastScreen';

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
        name="Livestream"
        component={BroadCastScreen}
        options={{
          tabBarLabel: 'Livestream',
          tabBarIcon: ({ color }) => (
            <Icon name="radio-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Followers"
        component={FollowersScreen}
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
