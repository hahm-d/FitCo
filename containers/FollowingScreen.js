import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,FlatList} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { fetchUsers, selectCoach } from '../actions/followActions';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
/* import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); */
class FollowingScreen extends React.Component {
  static navigationOptions = {
    title: "Following"
  };
    componentDidMount() {
      const { onfetchUsers } = this.props;
      onfetchUsers()
    }
  
    onPressUserRow = ( user ) => {
      this.props.navigation.navigate("PostContainer", { title: user.name });
      this.props.onSelectCoach(user);
    };

    render(){
        return(
            <>
            {this.props.isLoading ?
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
                      data={this.props.users}
                      keyExtractor={user => user.id}
                      renderItem={({ item }) => (
                        <TouchableOpacity>
                          <CardItem
                            user={item} 
                            name={item.username}
                            status={item.status}
                            variant
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
          users: state.users.users
          }
}

const mapDispatchToProps = dispatch => ({
    onfetchUsers: () => dispatch(fetchUsers()),
    onSelectCoach: (user) => dispatch(selectCoach(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingScreen);