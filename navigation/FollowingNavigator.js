import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FollowingScreen from '../containers/FollowingScreen';
import CoachDetailScreen from '../containers/CoachDetailScreen'
import PostCommentsScreen from '../containers/PostCommentsScreen';
const FollowingStack = createStackNavigator();

const FollowingNavigator = ({navigation}) => (
    <FollowingStack.Navigator headerMode='none'>
        <FollowingStack.Screen name="FollowingScreen" component={FollowingScreen}/>
        <FollowingStack.Screen name="CoachDetailScreen" component={CoachDetailScreen}/>
        <FollowingStack.Screen name="PostCommentsScreen" component={PostCommentsScreen}/>
    </FollowingStack.Navigator>
);

export default FollowingNavigator;