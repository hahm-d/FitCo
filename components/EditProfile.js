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

    state = {
        user: {
            id: this.props.currentUser.id,
            email: '',
            instagram: '',
            twitter: '',
            description: ''
        }
    }

    changeHandler = (name) => (text) => {
        this.setState({ user: { ...this.state.user, [name]: text} });
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
                value={this.state.user.username}
                placeholder="email"
                type='email'
                onChangeText={this.changeHandler}
                />
                <TextInput
                value={this.state.user.email}
                placeholder="instagram"
                type='instagram'
                onChangeText={this.changeHandler}
                /> 
                <TextInput
                value={this.state.user.email}
                placeholder="twitter"
                type='twitter'
                onChangeText={this.changeHandler}
                /> 
                <TextInput
                value={this.state.user.email}
                placeholder="description"
                type='description'
                onChangeText={this.changeHandler}
                /> 
                <TouchableOpacity>
                    <Button title="Update" onPress={() => this.updateUser(this.state.user)} />
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
    console.log(state.currentUser)
    return {
            currentUser: state.currentUser,
            isLoading: state.isLoading
           }
}

function mapDispatchToProps(dispatch){
    return { updateUser: (userObj) => dispatch(updateUser(userObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);