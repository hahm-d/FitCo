import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { signOutUser } from '../actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';
import {deleteToken} from '../actions/tokenActions'


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Home"
      };


//debug tool1
    clearAsync = async() => {
        console.log(this.props.stateALL)
    }

//debug tool2
    logCurrentStorage = () => {
        AsyncStorage.getAllKeys().then((keyArray) => {
          AsyncStorage.multiGet(keyArray).then((keyValArray) => {
            let myStorage = {};
            for (let keyVal of keyValArray) {
              myStorage[keyVal[0]] = keyVal[1]
            }
            console.log('CURRENT STORAGE: ', myStorage);
          })
        });
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10 }}>
                    <ActivityIndicator style={styles.loading}/>
                    <Button title="log states" onPress={this.clearAsync}/>
                    <Button title="log asyncStorage" onPress={this.logCurrentStorage}/>
                    <Button title="Sign out" onPress={this.signOutAsync} />
                </View>
            </View>
        );
    }


    signOutAsync = () => {
        this.props.signOutUser()
        this.props.deleteToken()
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
    loading: {
        alignItems: "center",
        justifyContent: "center",
        height: 100
    }
});


function mapStateToProps(state){
    return {
            stateALL: state
           }
}

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser()),
  deleteToken: () => dispatch(deleteToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);