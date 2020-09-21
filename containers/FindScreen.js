import React from 'react';
import {ActivityIndicator, View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Type from '../components/Type';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/followActions';
class FindScreen extends React.Component {
    static navigationOptions = {
        title: "Find Instructor"
      }

    componentDidMount() {
        this.props.onfetchUsers()
    }

      render(){
          console.log("loading", this.props.isLoading)
        return(
            <>
            {this.props.isLoading ?
                    <ActivityIndicator />
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
                        <Card key={index}>
                        <CardItem
                            id={item.id}
                            user={item} 
                            name={item.username}
                            status={item.status}
                            actions
                            onPressLeft={() => this.swiper.swipeLeft()}
                            onPressRight={() => this.swiper.swipeRight()}
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
        isLoading: state.isLoading,
        }
  }
  
  const mapDispatchToProps = dispatch => ({
      onfetchUsers: () => dispatch(fetchUsers()),
      onSelectCoach: (user) => dispatch(selectCoach(user))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FindScreen);