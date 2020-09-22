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
import { addPost } from '../actions/postActions';

class CreatePost extends React.Component {

    state = {
        title: "",
        content: "",
        url: "",
        views: 1,
        likes: 0
        }


    changeHandler = (name) => (text) => {
        this.setState({[name]: text});
    }

    signInAsync = (postObj) => {

        this.props.addPost(postObj, this.props.token.authToken)
        this.props.navigation.navigate('Profile');
    };

    render() {
        console.log(this.props.state)
        return (
            <View style={styles.container}>
                <Text>Update Profile</Text>
                <TextInput
                value={this.state.title}
                placeholder="title"
                type='title'
                onChangeText={this.changeHandler("title")}
                />
                <TextInput
                value={this.state.url}
                placeholder="url"
                type='url'
                onChangeText={this.changeHandler("url")}
                /> 
                <TextInput
                value={this.state.images}
                placeholder="images"
                type='images'
                onChangeText={this.changeHandler("images")}
                /> 
                <TextInput
                value={this.state.content}
                placeholder="content"
                type='content'
                onChangeText={this.changeHandler("content")}
                /> 
                <TouchableOpacity>
                    <Button title="Create Post" onPress={() => this.signInAsync(this.state)} />
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
            currentUser: state.users,
            token: state.token
           }
}

function mapDispatchToProps(dispatch){
    return { addPost: (postObj, token) => dispatch(addPost(postObj, token)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);