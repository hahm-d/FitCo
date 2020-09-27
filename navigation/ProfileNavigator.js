import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../containers/ProfileScreen';
import CreatePost from '../components/CreatePost';
import EditProfile from '../components/EditProfile';
import PostCommentsScreen from '../containers/PostCommentsScreen';
const ProfileStack = createStackNavigator();

const ProfileNavigator = ({navigation}) => (
    <ProfileStack.Navigator headerMode='none'>
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <ProfileStack.Screen name="CreatePost" component={CreatePost}/>
        <ProfileStack.Screen name="EditProfile" component={EditProfile}/>
        <ProfileStack.Screen name="PostCommentsScreen" component={PostCommentsScreen}/>
    </ProfileStack.Navigator>
);

export default ProfileNavigator;