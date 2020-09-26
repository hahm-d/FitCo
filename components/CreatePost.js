import React from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
    View,
    PixelRatio,
    TouchableOpacity,
    Image
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
        views: 1,
        likes: 0,
        image: null,
        video: null
        }


    changeHandler = (name) => (text) => {
        this.setState({[name]: text});
    }

    onPressCreate = (postObj) => {
        if(postObj["image"] !== null){
            postObj["image"] = this.state.image.data
        }
        if(postObj["video"] !== null){
            postObj["video"] = this.state.video.data
        }
        this.props.addPost(postObj, this.props.token.authToken)
        this.props.navigation.navigate('Profile');
        this.setState({ })
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
            this.setState({
              image: response
            });
          }
        });
      }
    
      selectVideoTapped() {
        const options = {
          title: 'Upload Video',
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
              video: response
            });
          }
        });
      }    

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Create Post</Text>
                <TextInput
                style={styles.text}
                value={this.state.title}
                placeholder="title"
                type='title'
                onChangeText={this.changeHandler("title")}
                />
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.image === null ? (
                        <Text>Select Photo</Text>
                        ) : (
                        <Image style={styles.avatar} source={this.state.image} />
                        )}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        <Text>Select Video</Text>
                    </View>
                </TouchableOpacity>
                {this.state.video && (
                    <Text style={{margin: 8, textAlign: 'center'}}>
                        {this.state.video.fileName}
                    </Text>
                )}
                <Text style={styles.text}>Add Description</Text>
                <TextInput
                value={this.state.content}
                placeholder="content"
                type='content'
                onChangeText={this.changeHandler("content")}
                /> 
                <TouchableOpacity style={styles.touch}>
                    <Button title="Create Post" onPress={() => this.onPressCreate(this.state)} />
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
        paddingTop: 25,
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 10,
        width: 100,
        height: 100,
    }, 
    title: {
        paddingTop: 25,
        paddingBottom: 5,
        fontSize: 25,
        textAlign: "center"
    },
    text: {
        paddingTop: 25,
        paddingBottom: 5,
        fontSize: 15,
        textAlign: "center"
    },
    touch: {
        paddingTop: 25,       
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