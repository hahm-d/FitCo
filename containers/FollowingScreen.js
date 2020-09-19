import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,FlatList} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { fetchUsers } from '../actions/followActions';
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
  

    render(){
        return(
            <>
            {this.props.isLoading ?
                    <ActivityIndicator />
                :
                  <ScrollView>
                    <View style={styles.top}>
                      <Text style={styles.title}>Matches</Text>
                      <TouchableOpacity>
                        <Text style={styles.icon}>
                          <Icon name="optionsV" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      numColumns={1}
                      data={this.props.users.users}
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


function mapStateToProps(state){
    return {
            users: state.users
           }
}

const mapDispatchToProps = dispatch => ({
    onfetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingScreen);