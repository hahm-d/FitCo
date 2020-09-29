import React from "react";
import { View, SafeAreaView, TouchableOpacity} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
} from 'react-native-paper';
import styles from '../assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

class CoachDetails extends React.Component {
  render() {
    const { username, email, image, instagram, twitter, description, postCount, followerCount } = this.props;
    return (
      <SafeAreaView style={styles.container}>
                  <Animatable.View style={styles.footer}
                    animation="fadeInDown"
                    duraton="2000"
                    delay={700}
                    style={styles.userInfoSection}>
          <View style={{flexDirection: 'column', marginTop: 15}}>
          { image == null ? 
            <Avatar.Image  source={require('../assets/images/avatarblank.png')} size={240} />
            :
            <Avatar.Image  source={ {uri: image.cloudinary}} size={250} />
          }
            <View style={{marginLeft: 5}}>
              <Title style={[styles.usertitle, {
                marginTop:20,
                marginBottom: 10,
              }]}>{username}</Title>
              <Caption style={styles.caption}>{description}</Caption>
            </View>
          </View>
        </Animatable.View>
  
        <Animatable.View style={styles.footer}
                    animation="fadeInLeft"
                    duraton="2000"
                    delay={700}
                    style={styles.userSocialSection}>
        <View style={styles.userProfileRow}>
            <Icon name="mail-outline" size={30} />
            <Text style={{color:"#777777", marginLeft: 20, marginTop: 10}}>{email}</Text>
          </View>
          <View style={styles.userProfileRow}>
            <Icon name="logo-twitter" size={30} />
            <Text style={{color:"#777777", marginLeft: 20, marginTop: 10}}>{twitter}</Text>
          </View>
          <View style={styles.userProfileRow}>
            <Icon name="logo-instagram" size={30}/>
            <Text style={{color:"#777777", marginLeft: 20, marginTop: 10}}>{instagram}</Text>
          </View>
        </Animatable.View>

          <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>{followerCount}</Title>
              <Caption>Followers</Caption>
            </View>
            <View style={styles.infoBox}>
            <Title>{postCount}</Title>
              <Caption>Posts</Caption>
            </View>
          </View>
      </SafeAreaView>
    );
  }
}


export default CoachDetails;
