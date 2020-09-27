import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {validateUser} from './actions/userActions';
import { saveToken } from './actions/tokenActions';


import LoginStackNavigator from './navigation/LoginStackNavigator';
import MainTabNavigator from './navigation/MainTabNavigator';

const Drawer = createDrawerNavigator();

class App extends Component {


retrieveData = async () => {
  try{
      const token = await AsyncStorage.getItem('userToken')
      if(token !==null){
        this.props.validateUser(token)
        this.props.saveToken(token)
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
  return (
    <NavigationContainer>
      {this.props.currentUser !== null ? (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MainTabNavigator} />          
        </Drawer.Navigator>
      )
        :
       <LoginStackNavigator /> 
       
      }
    </NavigationContainer>
  )
}
};

function mapStateToProps(state){
  return {
          currentUser: state.users.currentUser,
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