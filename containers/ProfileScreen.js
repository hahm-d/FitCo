import React from 'react';
import styles from '../assets/styles';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: "Profile"
      };

    render(){
  return (
    <View style={customStyles.container}>
        <Text>User Profile Page</Text>
    </View>

    )
    }
}

const customStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function mapStateToProps(state){
  return {
          currentUser: state.currentUser,
          flag: state.flag
         }
}

export default connect(mapStateToProps)(ProfileScreen);