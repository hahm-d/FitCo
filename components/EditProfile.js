import React from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { updateUser } from '../actions/userActions';
import ImagePicker from 'react-native-image-picker';

class EditProfile extends React.Component {

    state = {
            id: this.props.currentUser.id,
            username: this.props.currentUser.username,
            email: this.props.currentUser.email,
            instagram: this.props.currentUser.instagram,
            twitter: this.props.currentUser.twitter,
            description: this.props.currentUser.description,
            image: this.props.currentUser.image
    }

    changeHandler = (name) => (text) => {
        this.setState( {[name]: text} );
    }

    updateHandler = (userObj) => {
        const { navigation, updateUser, token, currentUser } = this.props;
        userObj["username"] = currentUser.username
        userObj["id"] = currentUser.id
        updateUser(userObj, token.authToken)
        navigation.navigate('Home');
    };

    render() {
        return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#009387' barStyle="light-content"/>
   <View style={styles.header}>
       <Animatable.Text animation="fadeInDown"  duraton="5000" direction="alternate" style={styles.text_header}> Update </Animatable.Text> 
   </View>

   <Animatable.View style={styles.footer}
       animation="fadeInUpBig"
       duraton="2000">  
       <Text style={styles.text_footer}>email</Text>
       <View style={styles.action}>
       <FontAwesome 
           name="id-badge"
           size={20}
       />
       <TextInput
       style={styles.textInput}
       value={this.state.email}
       placeholder="email"
       type='email'
       onChangeText={this.changeHandler("email")}
       />
       </View>
       <Text style={styles.text_footer}>Instagram</Text>
       <View style={styles.action}>
       <FontAwesome 
           name="envelope"
           size={20}
       />
       <TextInput
       style={styles.textInput}
       value={this.state.instagram}
       placeholder="Instagram Account"
       type='instagram'
       onChangeText={this.changeHandler("instagram")}
       /> 
       </View>
       <Text style={styles.text_footer}>Twitter</Text>
       <View style={styles.action}>
       <FontAwesome 
           name="lock"
           size={20}
       />
       <TextInput
       style={styles.textInput}
       value={this.state.twitter}
       placeholder="twitter account"
       type='twitter'
       onChangeText={this.changeHandler("twitter")}
       />   
       </View>
       <Text style={styles.text_footer}> Bio </Text>
       <View style={styles.action}>
       <FontAwesome 
           name="lock"
           size={20}
       />
       <TextInput
       style={styles.textInput}
       value={this.state.description}
       placeholder="description"
       type='description'
       onChangeText={this.changeHandler("description")}
       />   
       </View>
       <TouchableOpacity  
           onPress={() => this.updateHandler(this.state)}
           style={[styles.signIn, {
               borderColor: '#009387',
               borderWidth: 1,
               marginTop: 15
           }]}>
           <Text style={[styles.textSign, {color: '#009387'}]}>Submit</Text>
       </TouchableOpacity>

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
 
function mapStateToProps(state){
    return {
            currentUser: state.users.currentUser,
            token: state.token
           }
}

function mapDispatchToProps(dispatch){
    return { updateUser: (userObj, token) => dispatch(updateUser(userObj, token)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);