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
            username: '',
            password: ''
    }

    changeHandler = (name) => (text) => {
        this.setState({ [name]: text});
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    placeholder="username"
                    type='username'
                    onChangeText={this.changeHandler("username")}
                    placeholderTextColor={'darkgray'}
                />    
                <TextInput
                    value={this.state.password}
                    placeholder="password"
                    secureTextEntry
                    type='password'
                    onChangeText={this.changeHandler("password")}
                    placeholderTextColor={'darkgray'}
                /> 
                <TouchableOpacity>
                    <Button title="Sign in!" onPress={() => this.signInAsync(this.state)} />
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

function mapDispatchToProps(dispatch){
    return { loginUser: (userObj) => dispatch(loginUser(userObj)) }
}

export default connect(null, mapDispatchToProps)(SignInScreen);