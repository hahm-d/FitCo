import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {validateUser} from './actions/userActions';
import { saveToken } from './actions/tokenActions';


import LoginStackNavigator from './navigation/LoginStackNavigator';
import MainTabNavigator from './navigation/MainTabNavigator';
import CoachTabNavigator from './navigation/CoachTabNavigator';

//debugging
import HomeScreen from './containers/HomeScreen';

const Drawer = createDrawerNavigator();

class App extends Component {

state={
  isLoading: true
}

retrieveData = async () => {
  try{
      const token = await AsyncStorage.getItem('userToken')
      if(token !== null){
        this.props.validateUser(token)
        this.props.saveToken(token)
      }
      this.setState({isLoading: false})
  }
  catch(error){
    console.log(error)
  }
}
async componentDidMount() {
  await this.retrieveData()
}




render(){
  const { users } = this.props;
  if(this.state.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      {users.currentUser !== null ? [
       ( users.currentUser.flag === true ? 
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={CoachTabNavigator} />  
            <Drawer.Screen name="Debugger" component={HomeScreen}/>        
        </Drawer.Navigator>
        :
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabNavigator} />  
        <Drawer.Screen name="Debugger" component={HomeScreen}/>        
        </Drawer.Navigator>       
        )
      ]
        :
       <LoginStackNavigator /> 
       
      }
    </NavigationContainer>
  )
}
};

function mapStateToProps(state){
  return {
          users: state.users,
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