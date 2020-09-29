import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,FlatList, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { fetchFollowing, selectCoach } from '../actions/followActions';
import CoachListItem from "../components/CoachListItem";

/* import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); */
class FollowingScreen extends React.Component {
  static navigationOptions = {
    title: "Following"
  };
    componentDidMount() {
      this.props.fetchFollowing(this.props.currentUser.id, this.props.token.authToken)
    }
  

    onPressUserRow = ( user ) => {
      this.props.onSelectCoach(user);
      this.props.navigation.navigate("CoachDetailScreen", { title: user.name });

    };

    render(){
        return(
            <>
            {this.props.follows.isLoading ?
                    <ActivityIndicator size="small"/>
                :
                <ImageBackground
                source={require('../assets/images/bg1.png')}
                style={styles.bg}>
                  <ScrollView>
                    <View style={styles.top}>
                      <Text style={styles.title}>Following</Text>
                      <TouchableOpacity>
                        <Text style={styles.icon}>
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      numColumns={1}
                      data={this.props.follows.followings}
                      keyExtractor={user => user.id.toString()}
                      renderItem={({ item }) => (
                        <TouchableOpacity>
                          <CoachListItem
                            user={item} 
                            image={item.image}
                            onPress={this.onPressUserRow}
                          />
                        </TouchableOpacity>
                      )}
                    />
                  </ScrollView>
                  </ImageBackground>
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
  fetchFollowing: (id, token) => dispatch(fetchFollowing(id, token)),
    onSelectCoach: (user) => dispatch(selectCoach(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingScreen);