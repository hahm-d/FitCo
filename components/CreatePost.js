import React from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform,
    StatusBar,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';
import ImagePicker from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                 <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <View style={styles.header}>
                <Animatable.Text animation="fadeInDown"  duraton="5000" direction="alternate" style={styles.text_header}> Create Post </Animatable.Text> 
                </View>

                <Animatable.View style={styles.footer}
                            animation="fadeInUpBig"
                            duraton="2000">   
                <Text style={styles.text_footer}>Title</Text>
                    <View style={styles.action}>
                    <FontAwesome 
                        name="star"
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.username}
                        placeholder="title"
                        type='title'
                        onChangeText={this.changeHandler("title")}
                        placeholderTextColor={'darkgray'}
                    />    
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 50}}>
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
                    </View>
                <Text style={styles.text_footer}>Add Description</Text>
                    <View style={styles.action}>
                    <FontAwesome 
                        name="sticky-note"
                        size={20}
                    />
                        <TextInput
                            style={styles.textInput}
                            value={this.state.username}
                            placeholder="content"
                            type='content'
                            onChangeText={this.changeHandler("content")}
                            placeholderTextColor={'darkgray'}
                        />    
                    </View>                
                <TouchableOpacity  
                        onPress={() => this.onPressCreate(this.state)}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 50
                        }]}>
                        <Text style={[styles.textSign, {color: '#009387'}]}>Create Post</Text>
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
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 40
  },
  footer: {
      flex: 3,
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
      paddingTop: 25,
      paddingBottom: 5
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
  button: {
      alignItems: 'center',
      marginTop: 50
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