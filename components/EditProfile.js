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
import { updateUser } from '../actions/userActions';

class EditProfile extends React.Component {
    //fix this one later
    state = {
            id: this.props.currentUser.id,
            email: this.props.currentUser.email,
            instagram: this.props.currentUser.instagram,
            twitter: this.props.currentUser.twitter,
            description: this.props.currentUser.description
    }

    changeHandler = (name) => (text) => {
        this.setState( {[name]: text} );
    }

    signInAsync = (userObj) => {
        this.props.updateUser(userObj)
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Update Profile</Text>
                <TextInput
                value={this.state.email}
                placeholder="email"
                type='email'
                onChangeText={this.changeHandler("email")}
                />
                <TextInput
                value={this.state.instagram}
                placeholder="instagram"
                type='instagram'
                onChangeText={this.changeHandler("instagram")}
                /> 
                <TextInput
                value={this.state.twitter}
                placeholder="twitter"
                type='twitter'
                onChangeText={this.changeHandler("twitter")}
                /> 
                <TextInput
                value={this.state.description}
                placeholder="description"
                type='description'
                onChangeText={this.changeHandler("description")}
                /> 
                <TouchableOpacity>
                    <Button title="Update" onPress={() => this.updateUser(this.state)} />
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
            currentUser: state.users.currentUser,
           }
}

function mapDispatchToProps(dispatch){
    return { updateUser: (userObj) => dispatch(updateUser(userObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);