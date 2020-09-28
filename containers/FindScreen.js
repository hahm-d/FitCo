import React from 'react';
import {ActivityIndicator, 
        View, 
        ImageBackground, 
        TouchableOpacity, 
        Text,
        Modal, 
        TouchableHighlight } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { fetchUsers, followCoach } from '../actions/followActions';
import { fetchTypes, addCategory } from '../actions/typeActions';
import Icon from 'react-native-vector-icons/Ionicons';

class FindScreen extends React.Component {
    static navigationOptions = {
        title: "Find Instructor"
      }

    state = {
        modalVisible: false,
        selectedType: 11,
        selectedDisplay: "All"
    }

    

    componentDidMount() {
        this.props.onfetchUsers(this.props.token.authToken)
        this.props.onFetchTypes(this.props.token.authToken)
        this.props.addCategory()
    }

    swipeRight = (coach_id) => {
        const followObj = {
            user_id: this.props.users.currentUser.id,
            coach_id: coach_id,
        }
        this.props.onfollowCoach(followObj, this.props.token.authToken)
    }

    setModalVisible = (visible) => {
        this.setState({ 
          modalVisible: visible});
    }

    filterHandler = (index) =>{
        const { types } = this.props
        const findId = types.category.find(cat => cat.category === index)
        this.setState({selectedType: findId.category})    
        this.setState({selectedDisplay: findId.name})
    }


      render(){
          console.log(this.state.selectedType)
        const { types, users } = this.props;
        const { modalVisible, selectedDisplay } = this.state;
        return(
            <>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
            >
            <View >
                <View style={styles.modalView}>
                <Text style={styles.nameStyle}>Select Type</Text>
            {types.isLoading ?
                    <ActivityIndicator size="small"/>
                :
                types.category.map((item)=>{
                    return(
                        <TouchableOpacity style={styles.filterList}
                        onPress={() => this.filterHandler(item.category)}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }

                <TouchableHighlight
                    style={{ ...styles.modalButton }}
                    onPress={() => {
                    this.setModalVisible(false, null);
                    }}>
                    <Text style={styles.exitButton}> x </Text>
                </TouchableHighlight>
                </View>
            </View>
            </Modal>

            {users.isLoading ?
                    <ActivityIndicator size="small"/>
                :
                <ImageBackground
                source={require('../assets/images/bg2.png')}
                style={styles.bg}
                >
                <View style={styles.containerHome}>
                    <View style={styles.top}>
                    <View style={styles.filtersDisplay}>
                        <Text style={styles.filtersText}>    
                           Displaying: {selectedDisplay}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.filters}
                    onPress={() => this.setModalVisible(true)} >
                    <Text style={styles.filtersText}>
                        <Icon name="filter-outline" size={26} />
                    </Text>
                    </TouchableOpacity>
                    </View>

                    <CardStack
                    loop={true}
                    verticalSwipe={false}
                    renderNoMoreCards={() => null}
                    ref={swiper => (this.swiper = swiper)}
                    >
                    {users.users.map((item, index) => (
                        <Card key={index}
                        onSwipedRight={() => this.swipeRight(item.id)}>
                        <CardItem
                            id={item.id}
                            image={item.image}
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
        types: state.types,
        token: state.token
        }
  }
  
  const mapDispatchToProps = dispatch => ({
      onfetchUsers: (token) => dispatch(fetchUsers(token)),
      addCategory: () => dispatch(addCategory()),
      onFetchTypes: (token) => dispatch(fetchTypes(token)),
      onSelectCoach: (user) => dispatch(selectCoach(user)),
      onfollowCoach: (followObj, token) => dispatch(followCoach(followObj, token))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FindScreen);