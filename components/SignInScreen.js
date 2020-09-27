import React from 'react';
import { 
    Button,
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';


class SignInScreen extends React.Component {
    static navigationOptions = {
        title: "Sign in"
      };

    state = {
            username: null,
            password: null
    }

    changeHandler = (name) => (text) => {
        this.setState({ [name]: text});
    }

    render() {
        return (
            <View style={styles.container}>
                 <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <View style={styles.header}>
                <Animatable.Text animation="fadeInDown"  duraton="5000" direction="alternate" style={styles.text_header}> FitCo </Animatable.Text> 
                </View>
                <Animatable.View style={styles.footer}
                            animation="fadeInUpBig"
                            duraton="2000">            
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.action}>
                    <FontAwesome 
                        name="id-badge"
                        size={20}
                    />
                        <TextInput
                            style={styles.textInput}
                            value={this.state.username}
                            placeholder="username"
                            type='username'
                            onChangeText={this.changeHandler("username")}
                            placeholderTextColor={'darkgray'}
                        />    
                    </View>
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="lock"
                            size={20}
                        />
                        <TextInput
                            style={styles.textInput}
                            value={this.state.password}
                            placeholder="password"
                            secureTextEntry
                            type='password'
                            onChangeText={this.changeHandler("password")}
                            placeholderTextColor={'darkgray'}
                        /> 
                    </View>
                    <TouchableOpacity style={styles.text_footer}>
                        <Button title="Sign in!" onPress={() => this.signInAsync(this.state)} />
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        );
    }

    signInAsync = (userObj) => {

        if(userObj.username.length == 0 || userObj.password.length == 0){
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);   
            return;
        }
        this.props.loginUser(userObj)
        this.props.navigation.navigate('Home');
    };
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#000000'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 40
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        paddingBottom: 20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 20,
        paddingTop: 25,
        paddingBottom: 5
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });


function mapDispatchToProps(dispatch){
    return { loginUser: (userObj) => dispatch(loginUser(userObj)) }
}

export default connect(null, mapDispatchToProps)(SignInScreen);