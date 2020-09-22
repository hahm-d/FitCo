import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,FlatList} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { fetchFollowing, selectCoach } from '../actions/followActions';
import CoachListItem from "../components/CoachListItem";
import Icon from '../components/Icon';
/* import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); */
class FollowingScreen extends React.Component {
  static navigationOptions = {
    title: "Following"
  };
    componentDidMount() {
      this.props.onfetchFollowing(this.props.users.currentUser.id, this.props.token.authToken)
    }
  
    onPressUserRow = ( user ) => {
      this.props.navigation.navigate("Coach Detail", { title: user.name });
      this.props.onSelectCoach(user);
    };

    render(){
        return(
            <>
            {this.props.users.isLoading ?
                    <ActivityIndicator />
                :
                  <ScrollView>
                    <View style={styles.top}>
                      <Text style={styles.title}>Following</Text>
                      <TouchableOpacity>
                        <Text style={styles.icon}>
                          <Icon name="optionsV" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      numColumns={1}
                      data={this.props.users.users}
                      keyExtractor={user => user.id.toString()}
                      renderItem={({ item }) => (
                        <TouchableOpacity>
                          <CoachListItem
                            user={item} 
                            onPress={this.onPressUserRow}
                          />
                        </TouchableOpacity>
                      )}
                    />
                  </ScrollView>
            }
           </>
        )
    }
}


const mapStateToProps = state => {
  return {
          users: state.users,
          token: state.token
          }
}

const mapDispatchToProps = dispatch => ({
  onfetchFollowing: (id, token) => dispatch(fetchFollowing(id, token)),
    onSelectCoach: (user) => dispatch(selectCoach(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingScreen);