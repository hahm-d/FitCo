import React from 'react'
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ImageBackground, 
         ScrollView, 
         TouchableOpacity, 
         FlatList } from 'react-native'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/followActions';
import { fetchPosts } from '../actions/postActions';
import * as Animatable from 'react-native-animatable';

const foods = [
    {key: 1, image: 'https://res.cloudinary.com/dkagcuui6/image/upload/v1601319680/food1_vkpk33.png', title: 'Cold Smoothie Bowl', text: 'A creamy cold smoothie topped with crunchy homemade granola, raw almonds and fresh blueberries! You’ll find this recipe in our Vegan Bowls App! The Vegan Bowls app is a monthly interactive eBook subscription, where each month you can access a new eBook inspired by a theme. Our latest edition is an eBook filled with healthy smoothie bowl recipes!'},
    {key: 2, image: 'https://res.cloudinary.com/dkagcuui6/image/upload/v1601319690/food2_ltq9jw.png', title: 'Mango Dream Bowl', text: '​Find this smoothie bowl in the latest edition of our Vegan Bowls App! The Vegan Bowls app is a monthly interactive eBook subscription, where each month you can access a new eBook inspired by a theme or cuisine. In our latest edition, we have an eBook filled with healthy smoothie bowl recipes, that’s 100% plant-based!'},
    {key: 3, image: 'https://res.cloudinary.com/dkagcuui6/image/upload/v1601319686/food3_butsto.png', title: 'Smoothie Bowl Sisters', text: '3 cups frozen blueberries, 1/2cup frozen mango, 1 frozen banan, 1/4 coconut milk to help BLEND!'}
]

class MainScreen extends React.Component {

    componentDidMount() {
        this.props.onfetchUsers(this.props.token.authToken)
        this.props.onfetchPosts(this.props.token.authToken)
    }


  render() {
      const { users, posts } = this.props;
    return (
      <View>
      {users.isLoading && posts.isLoading ?
                    <ActivityIndicator size="large" style={{flex: 1, justifyContent: "center"}}/>
                :
        <ScrollView> 
            <Animatable.View 
                delay={1200}                
                animation="fadeInLeft"
                duraton="9000">
                <ImageBackground
                source={require('../assets/images/homescreen.png')}
                style={{width: '100%', height: 270}}
                imageStyle={{borderBottomRightRadius:65}}
                >
                <View style={styles.DarkOverlay}></View>
                <View style={styles.searchContainer}>
                    <Text style={styles.userGreet}>Welcome to FitCo</Text>
                    <Text style={styles.userText}>Check out the lastest Posts and featured Coaches</Text>
                </View>
                </ImageBackground>
            </Animatable.View>   
                <View style={{padding: 25}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Trending Posts</Text>
                </View>
            <ScrollView>
            <Animatable.View   
                delay={1200}                 
                animation="fadeInRight"
                duraton="9000">
                    <FlatList
                    horizontal={true}
                        data={posts}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                                <View style={{paddingVertial: 20, paddingLeft: 16}}>
                                    <TouchableOpacity>
                                        { item.image && 
                                        <Image 
                                            source={{uri: item.image.cloudinary}}
                                            style={{width: 150, marginRight: 8,
                                                    height: 250, borderRadius: 10}}
                                         /> }
                                    </TouchableOpacity>
                                    <Text style={styles.postImageText}>{item.title}</Text>
                                </View>
                            )
                        }}/>
                </Animatable.View>
            </ScrollView>


                <View style={{padding: 25}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Trending Coaches</Text>
                </View>
            <ScrollView>
            <Animatable.View 
                delay={1200}                 
                animation="fadeInLeft"
                duraton="9000">
                    <FlatList
                    horizontal={true}
                    //fix this later
                        data={users.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                                <View style={{paddingVertial: 20, paddingLeft: 16}}>
                                    <TouchableOpacity>
                                        { item.image && 
                                        <Image 
                                            source={{uri: item.image.cloudinary}}
                                            style={{width: 200, marginRight: 8,
                                                    height: 250, borderRadius: 10}}
                                         /> }
                                    </TouchableOpacity>
                                    <Text style={styles.imageText}>{item.username}</Text>
                                </View>
                            )
                        }}/>
                </Animatable.View>
            </ScrollView>

            <View style={{padding: 25}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Nutrition & Wellness</Text>
                </View>
            <ScrollView>
            <Animatable.View 
                delay={1200}                 
                animation="fadeInRight"
                duraton="9000">
                <FlatList
                    horizontal={true}
                    data={foods}
                    keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                        return(
                            <View style={{paddingVertial: 20, paddingLeft: 16, paddingBottom: 50}}>
                                <TouchableOpacity>
                                    { item.image && 
                                    <Image 
                                        source={{uri: item.image}}
                                        style={{width: 150, marginRight: 8,
                                                marginBottom: 10, height: 250, borderRadius: 10}}
                                        /> }
                                </TouchableOpacity>
                                <Text style={styles.imageTextFood}>{item.title}</Text>
                            </View>
                        )
                        }
                    }/>
                </Animatable.View>
            </ScrollView>

            </ScrollView>          
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent: 'center',
        justifyContent: 'center',
    },
    DarkOverlay: {
        position: 'absolute',
        top: 0, 
        right: 0,
        left: 0,
        height: 270,
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    searchContainer:{
        paddingTop: 100,
        paddingLeft: 16
    },  
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    userText:{
       fontSize: 16,
       fontWeight: 'normal',
       color: 'white'
    },
    imageOverlay:{
        width: 150, 
        height: 250,
        marginRight: 8,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.3
    },
    imageIcon: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 10
    },
    postImageText:{
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 4,
        fontSize: 17,
        left: 22,
        bottom: 15
    },
    imageText:{
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 4,
        fontSize: 19,
        left: 30,
        bottom: 15
    },
    imageTextFood:{
        fontWeight: 'bold'
    }
})



const mapStateToProps = state => {
    return {
        users: state.users.users,
        posts: state.posts.posts,
        token: state.token
        }
}
  
const mapDispatchToProps = dispatch => ({
    onfetchUsers: (token) => dispatch(fetchUsers(token)),
    onfetchPosts: (token) => dispatch(fetchPosts(token))
});

  
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);