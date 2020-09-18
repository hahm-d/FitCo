import React from 'react';
import {
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { removeUserToken } from '../actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';


class SignOutScreen extends React.Component {
    static navigationOptions = {
        title: "Sign Out"
      };
    render() {
        return (
                <TouchableOpacity
                  style={{ marginRight: 30 }}
                  onPress={() =>
                    Alert.alert("Logout alert", "Do you really want to Logout...", [
                      {
                        text: "NO",
                        onPress: () => console.warn("NO Pressed"),
                        style: "cancel"
                      },
                      {
                        text: "YES",
                        onPress: () =>
                        this.signOutAsync
                      }
                    ])
                  }
                ><Button title="Sign out" onPress={this.signOutAsync} />
                </TouchableOpacity>
        )
    }


    signOutAsync = () => {
        this.props.removeUserToken()
        this.props.navigation.navigate('Sign in');
    };
}

const styles = StyleSheet.create({
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
            isLoading: state.isLoading
           }
}

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutScreen);