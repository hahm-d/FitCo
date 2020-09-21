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

class CreatPost extends React.Component {

    state = {
            title: '',
            content: '',
            url: '',
            views: 1,
            likes: 0,
            images: null
        }

    changeHandler = (name) => (text) => {
        this.setState({[name]: text});
    }

    signInAsync = (postObj) => {
        this.props.addPost(postObj)
        this.props.navigation.navigate('My Profile');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Update Profile</Text>
                <TextInput
                value={this.state.title}
                placeholder="title"
                type='title'
                onChangeText={this.changeHandler}
                />
                <TextInput
                value={this.state.content}
                placeholder="content"
                type='content'
                onChangeText={this.changeHandler}
                /> 
                <TextInput
                value={this.state.url}
                placeholder="url"
                type='url'
                onChangeText={this.changeHandler}
                /> 
                <TextInput
                value={this.state.images}
                placeholder="images"
                type='images'
                onChangeText={this.changeHandler}
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
    console.log(state.currentUser)
    return {
            currentUser: state.currentUser,
            isLoading: state.isLoading
           }
}

function mapDispatchToProps(dispatch){
    return { addPost: (postObj) => dispatch(addPost(postObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatPost);