import React from 'react';
import {ActivityIndicator, ScrollView,View,Text,TouchableOpacity,FlatList} from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { fetchPosts } from '../actions/postActions';
import PostItem from '../components/PostItem';
import Icon from '../components/Icon';
/* import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); */
class PostContainer extends React.Component {
    static navigationOptions = {
        title: "PostContainer"
      };
    componentDidMount() {
        this.props.fetchPosts()
    }

    render(){
        console.log(this.props.posts.posts)
        return(
            <>
            {this.props.isLoading ?
                    <ActivityIndicator />
                :
                  <ScrollView>
                    <View style={styles.top}>
                      <Text style={styles.title}>Posts</Text>
                      <TouchableOpacity>
                        <Text style={styles.icon}>
                          <Icon name="optionsV" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      numColumns={1}
                      data={this.props.posts}
                      keyExtractor={post => post.id}
                      renderItem={({ item }) => (
                        <TouchableOpacity>
                          <PostItem
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            views={item.views}
                            likes={item.likes}
                            url={item.url}
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
            posts: state.posts.posts,
            users: state.users,
            isLoading: state.isLoading
           }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);