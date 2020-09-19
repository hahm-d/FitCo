import React from 'react';
import {
    Button,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { removeUserToken } from '../actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Home"
      };


//debug tool1
    clearAsync = async() => {
        AsyncStorage.clear();
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

    
/*     getTokenAsyncStorage = async () => {
        try {
          const value = await AsyncStorage.getItem('@userToken')
          console.log("see this one? ", value)
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
 */

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10 }}>
                    <Button title="clear async" onPress={this.clearAsync}/>
                    <Button title="log async" onPress={this.logCurrentStorage}/>
                    <Button title="Sign out" onPress={this.signOutAsync} />
                </View>
            </View>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);