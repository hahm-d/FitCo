import React from 'react';
import {ActivityIndicator, View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Type from '../components/Type';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { fetchUsers, followCoach } from '../actions/followActions';
class FindScreen extends React.Component {
    static navigationOptions = {
        title: "Find Instructor"
      }

    componentDidMount() {
        this.props.onfetchUsers(this.props.token.authToken)
    }

    swipeRight = (coach_id) => {
        const followObj = {
            user_id: this.props.users.currentUser.id,
            coach_id: coach_id,
        }
        this.props.onfollowCoach(followObj, this.props.token.authToken)
    }

      render(){
        return(
            <>
            {this.props.users.isLoading ?
                    <ActivityIndicator size="small"/>
                :
                <ImageBackground
                source={require('../assets/images/bg.png')}
                style={styles.bg}
                >
                <View style={styles.containerHome}>
                    <View style={styles.top}>
                    <Type />
                    <Filters />
                    </View>

                    <CardStack
                    loop={true}
                    verticalSwipe={false}
                    renderNoMoreCards={() => null}
                    ref={swiper => (this.swiper = swiper)}
                    >
                    {this.props.users.users.map((item, index) => (
                        <Card key={index}
                        onSwipedRight={() => this.swipeRight(item.id)}>
                        <CardItem
                            id={item.id}
                            image={item.image.cloudinary}
                            user={item} 
                            name={item.username}
                            status={item.status}
                            description={item.description}
                            status={item.status}
                            actions
                            onPressLeft={() => this.swiper.swipeLeft()}
                            onPressRight={() => this.swiper.swipeRight(item.id)}
                        />
                        </Card>
                    ))}
                    </CardStack>
                </View>
                </ImageBackground>
                }
            </>
        )
    }

};

const mapStateToProps = state => {
    return {
        users: state.users,
        token: state.token
        }
  }
  
  const mapDispatchToProps = dispatch => ({
      onfetchUsers: (token) => dispatch(fetchUsers(token)),
      onSelectCoach: (user) => dispatch(selectCoach(user)),
      onfollowCoach: (followObj, token) => dispatch(followCoach(followObj, token))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FindScreen);