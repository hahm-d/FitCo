import React from 'react';
import {
    Button,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { removeUserToken } from '../actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';
import { NativeModules } from 'react-native'

if (__DEV__) {
    NativeModules.DevMenu.debugRemotely(true)
  }
class HomeScreen extends React.Component {

    getTokenAsyncStorage = async () => {
        try {
          const value = await AsyncStorage.getItem('@userToken')
          if(value !== null) {
            //send to login/signup navi
          }else{
            //grab the current user
            //send to user profile page on success
          }
        } catch(e) {
          // error reading value
        }
    }

    componentDidMount() {
        this.getTokenAsyncStorage();
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10 }}>
                    <Button title="Sign out" onPress={this.signOutAsync} />
                </View>
            </View>
        );
    }


    signOutAsync = () => {
        this.props.removeUserToken()
/*             .then(() => {
                this.props.navigation.navigate('Home');
            })
            .catch(error => {
                this.setState({ error })
            }) */

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);