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
        post_id: this.props.posts.id,
        username: this.props.currentUser.username,
        comment: ""
        }

    changeHandler = (name) => (text) => {
        this.setState({[name]: text});
    }

    signInAsync = (commentObj) => {
        this.props.addComment(commentObj, this.props.token.authToken)
        this.props.navigation.navigate('Post');
    };

    render() {

        return (
            <View style={styles.container}>
                <Text>Add Comment</Text>
                <TextInput
                value={this.state.comment}
                placeholder="comment"
                type='comment'
                onChangeText={this.changeHandler("comment")}
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
 
function mapStateToProps(state){
    return {
            currentUser: state.users.currentUser,
            posts: state.posts.selectedPost,
            comments: state.comments, 
            token: state.token
           }
}

function mapDispatchToProps(dispatch){
    return { addComment: (commentObj, token) => dispatch(addComment(commentObj, token)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);