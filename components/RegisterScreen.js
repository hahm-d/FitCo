import React from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';
import { saveUserToken } from '../actions/userActions';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class RegisterScreen extends React.Component {

    state = {
            username: '',
            email: '',
            password: '',
            password2: '',
            flag: false
    }

    changeHandler = (name) => (text) => {
        this.setState({ [name]: text});
    }

    changeButtonHandler = () => {
      this.setState({flag: !this.state.flag})
      }

    signUpAsync = (userObj) => {
        if(userObj.password !== userObj.password2){
            Alert.alert('Invalid Entry', 'Password field does not match.', [
                {text: 'confirmed'}
            ]);
            this.setState({ password: '', password2: ''})
        }else{
            this.props.saveUserToken(userObj)
        }
    };

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
                    <Text style={styles.text_account}>Select Account</Text>
                    <View style={styles.buttons}>
                        <CheckBox
                        center
                        iconRight
                        title='Coach'
                        checked={this.state.flag}
                        onPress={() => {this.setState({flag: true})}}
                        />
                        <CheckBox
                        center
                        iconRight
                        title='Student'
                        checked={!this.state.flag}
                        onPress={() => {this.setState({flag: false})}}
                        />
                    </View>
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.action}>
                    <FontAwesome 
                        name="id-badge"
                        size={20}
                    />
                    <TextInput
                    style={styles.textInput}
                    value={this.state.username}
                    placeholder="Username"
                    type='username'
                    onChangeText={this.changeHandler("username")}
                    />
                    </View>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                    <FontAwesome 
                        name="envelope"
                        size={20}
                    />
                    <TextInput
                    style={styles.textInput}
                    value={this.state.email}
                    placeholder="Email"
                    type='email'
                    onChangeText={this.changeHandler("email")}
                    /> 
                    </View>
                    <Text style={styles.text_footer}>Password</Text>
                    <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        size={20}
                    />
                    <TextInput
                    style={styles.textInput}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry
                    type='password'
                    onChangeText={this.changeHandler("password")}
                    />   
                    </View>
                    <Text style={styles.text_footer}> Confirm Password</Text>
                    <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        size={20}
                    />
                    <TextInput
                    style={styles.textInput}
                    value={this.state.password2}
                    placeholder="Password"
                    secureTextEntry
                    type='password2'
                    onChangeText={this.changeHandler("password2")}
                    />   
                    </View>
                    <TouchableOpacity  
                        onPress={() => this.signUpAsync(this.state)}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}>
                        <Text style={[styles.textSign, {color: '#009387'}]}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                </View>
                </Animatable.View>
            </View>
        );

    }
    
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
        paddingBottom: 20
    },
    footer: {
        flex: 5,
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
        paddingTop: 40,
        paddingBottom: 5
    },
    text_account: {
        color: '#05375a',
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 5,
        textAlign: 'center'
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
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
      buttons: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20
  },
  });
 

function mapDispatchToProps(dispatch){
    return { saveUserToken: (userObj) => dispatch(saveUserToken(userObj)) }
}

export default connect(null, mapDispatchToProps)(RegisterScreen);