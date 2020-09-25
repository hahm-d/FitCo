import React from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
    View,
    PixelRatio,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';
import ImagePicker from 'react-native-image-picker';

class CreatePost extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam("title")
        }
      };

    state = {
        title: null,
        content: null,
        url: null,
        video: null,
        views: 1,
        likes: 0,
        avatarSource: null,
        videoSource: null,
        }


    changeHandler = (name) => (text) => {
        this.setState({[name]: text});
    }

    signInAsync = (postObj) => {

        this.props.addPost(postObj, this.props.token.authToken)
        this.props.navigation.navigate('Profile');
    };

    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = {uri: response.uri};
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source,
            });
          }
        });
      }
    
      selectVideoTapped() {
        const options = {
          title: 'Video Picker',
          takePhotoButtonTitle: 'Take Video...',
          mediaType: 'video',
          videoQuality: 'medium',
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled video picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            this.setState({
              videoSource: response.uri,
            });
          }
        });
      }    

    render() {
        console.log(this.props.state)
        return (
            <View style={styles.container}>
                <Text>Create Post</Text>
                <TextInput
                value={this.state.title}
                placeholder="title"
                type='title'
                onChangeText={this.changeHandler("title")}
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
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
  }
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