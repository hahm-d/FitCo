import React from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Type from '../components/Type';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import { connect } from 'react-redux';

class FindScreen extends React.Component {
    static navigationOptions = {
        title: "Find Instructor"
      }
render(){
  return (
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
          {this.props.users.map((item, index) => (
            <Card key={index}>
              <CardItem
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
  );
}
};

const mapStateToProps = state => {
    return {
            users: state.users.users
            }
  }
  
  const mapDispatchToProps = dispatch => ({
      onfetchUsers: () => dispatch(fetchUsers()),
      onSelectCoach: (user) => dispatch(selectCoach(user))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FindScreen);