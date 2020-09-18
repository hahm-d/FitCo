import React from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions/userActions';

class RegisterScreen extends React.Component {

    state = {
        user: {
            username: '',
            password: '',
            email: ''
        }
    }

    handleUsername = text => {
        this.setState({ user: { ...this.state.user, username: text} });
    }

    handleEmail = text => {
        this.setState({ user: { ...this.state.user, email: text} });
    }
      
    handlePassword = text => {
        this.setState({ user: { ...this.state.user, password: text} });
    }

    signInAsync = (userObj) => {
        this.props.saveUserToken(userObj)
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>fill this out</Text>
                <TextInput
                value={this.state.user.username}
                placeholder="Username"
                type='username'
                onChangeText={this.handleUsername}
                />
                <TextInput
                value={this.state.user.email}
                placeholder="Email"
                type='email'
                onChangeText={this.handleEmail}
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
    return { saveUserToken: (userObj) => dispatch(saveUserToken(userObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);