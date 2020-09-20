import React from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import {validateUser} from '../actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';
class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  retrieveData = async () => {
    try{
        const token = await AsyncStorage.getItem('userToken')
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
  


  render() {
    const { currentUser, isLoading } = this.props;
    console.log("current user? profile: ", this.props.currentUser)
    return (
      <ScrollView>
            <>
            {this.props.isLoading ?
                    <ActivityIndicator />
                :
          <View>
            <UserDetails
              name={currentUser}
              email={currentUser}
            />
          </View>
        }
        </>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {

  return {
    currentUser: state.currentUser,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
    validateUser: (token) => dispatch(validateUser(token))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);