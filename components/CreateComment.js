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
import { addComment } from '../actions/commentActions';

class CreateComment extends React.Component {

    state = {
        post_id: null,
        commenter_name: "",
        comment: ""
        }

    changeHandler = (name) => (text) => {
        this.setState({[name]: text});
    }

    signInAsync = (postObj) => {
        this.props.addPost(postObj)
        this.props.navigation.navigate('Profile');
    };

    render() {

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
            posts: state.posts.selectedPost
           }
}

function mapDispatchToProps(dispatch){
    return { addPost: (postObj) => dispatch(addPost(postObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);