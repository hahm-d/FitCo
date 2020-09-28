import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { fetchFollowers, selectCoach } from '../actions/followActions';
import CoachListItem from "../components/CoachListItem";
import * as Animatable from 'react-native-animatable';

class FollowersScreen extends React.Component {
  static navigationOptions = {
    title: "Following"
  };
    componentDidMount() {
      this.props.fetchFollowers(this.props.currentUser.id, this.props.token.authToken)
    }
  

    onPressUserRow = ( user ) => {
      this.props.onSelectCoach(user);
      this.props.navigation.navigate("Coach Detail", { title: user.name });

    };

    render(){
      const { follows } = this.props;
        return(
            <>
            {follows.isLoading ?
                    <ActivityIndicator size="small"/>
                :

                  <ScrollView>
                    <View style={styles.top}>
                      <Text style={styles.title}>Followers</Text>
                      <TouchableOpacity>
                      <Text style={styles.icon}>
                    </Text>
                      </TouchableOpacity>
                    </View>
                    <Animatable.View                 
                animation="fadeInRight"
                duraton="9000">
                    <FlatList
                        numColumns={2}
                        data={follows.followers}
                        renderItem={({item}) => {
                            return(
                                <View style={{paddingVertial: 20, paddingLeft: 30, paddingRight: 20}}>
                                    <TouchableOpacity>
                                        { item.image ? 
                                        <Image 
                                            source={{uri: item.image.cloudinary}}
                                            style={styles.followerAvatar}
                                         />
                                        :
                                        <Image 
                                            source={require('../assets/images/avatarblank.png')}
                                            style={styles.followerAvatar}
                                         />                                              
                                        }
                                    </TouchableOpacity>
                                      <Text style={{flexDirection: 'row'}}>
                                          <Text style={styles.postImageText}>{item.username}</Text>
                                          <View style={styles.status}>
                                            <View style={item.status === "online" ? styles.online : styles.offline} />
                                            <Text style={styles.statusText}>{item.status}</Text>
                                         </View>
                                      </Text>
                                </View>
                            )
                        }}/>
                </Animatable.View>
                  </ScrollView>
            }
           </>
        )
    }
}


const mapStateToProps = state => {
  return {
          currentUser: state.users.currentUser,
          follows: state.follows,
          posts: state.posts,
          token: state.token
          }
}

const mapDispatchToProps = dispatch => ({
  fetchFollowers: (id, token) => dispatch(fetchFollowers(id, token)),
    onSelectCoach: (user) => dispatch(selectCoach(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowersScreen);