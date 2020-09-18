import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: "Sign in"
      };

    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleUsername = text => {
        this.setState({ user: { ...this.state.user, username: text} });
    }
    handlePassword = text => {
        this.setState({ user: { ...this.state.user, password: text} });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.user.username}
                    placeholder="Username"
                    type='username'
                    onChangeText={this.handleUsername}
                />    
                <TextInput
                    value={this.state.user.password}
                    placeholder="Password"
                    secureTextEntry
                    type='password'
                    onChangeText={this.handlePassword}
                /> 
                <TouchableOpacity>
                    <Button title="Sign in!" onPress={() => this.signInAsync(this.state.user)} />
                </TouchableOpacity>
            </View>
        );
    }

    signInAsync = (userObj) => {
        this.props.loginUser(userObj)
        this.props.navigation.navigate('Home');
    };
};

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

function mapDispatchToProps(dispatch){
    return { loginUser: (userObj) => dispatch(loginUser(userObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);