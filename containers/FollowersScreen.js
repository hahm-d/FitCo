import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,FlatList, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { fetchFollowers, selectCoach } from '../actions/followActions';
import CoachListItem from "../components/CoachListItem";

//IN PROGRESS FOR COACH 

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
        return(
            <>
            {this.props.follows.isLoading ?
                    <ActivityIndicator size="small"/>
                :
                <ImageBackground
                source={require('../assets/images/bg.png')}
                style={styles.bg}>
                  <ScrollView>
                    <View style={styles.top}>
                      <Text style={styles.title}>Followers</Text>
                      <TouchableOpacity>
                        <Text style={styles.icon}>
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      numColumns={2}
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
  fetchFollowers: (id, token) => dispatch(fetchFollowers(id, token)),
    onSelectCoach: (user) => dispatch(selectCoach(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowersScreen);