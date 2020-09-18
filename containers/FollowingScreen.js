import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,ImageBackground,FlatList} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import AsyncStorage from '@react-native-community/async-storage';
import { fetchUsers } from '../actions/followActions';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
class FollowingScreen extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
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
            currentUser: state.currentUser,
            users: state.users,
            isLoading: state.isLoading
           }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingScreen);