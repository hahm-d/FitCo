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
            username: '',
            password: '',
            email: ''
    }

    changeHandler = (name) => (text) => {
        this.setState({ [name]: text});
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
                value={this.state.username}
                placeholder="Username"
                type='username'
                onChangeText={this.changeHandler("username")}
                />
                <TextInput
                value={this.state.email}
                placeholder="Email"
                type='email'
                onChangeText={this.changeHandler("email")}
                /> 
                <TextInput
                value={this.state.password}
                placeholder="Password"
                secureTextEntry
                type='password'
                onChangeText={this.changeHandler("password")}
                />   
                <TouchableOpacity>
                    <Button title="Submit" onPress={() => this.signInAsync(this.state)} />
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
 

function mapDispatchToProps(dispatch){
    return { saveUserToken: (userObj) => dispatch(saveUserToken(userObj)) }
}

export default connect(null, mapDispatchToProps)(RegisterScreen);