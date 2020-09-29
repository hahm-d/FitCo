import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import PropTypes from "prop-types";
import styles from '../assets/styles';

class CoachListItem extends Component {
  render() {
    const { user, image, onPress } = this.props;

  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth - 120,
      height: 300,
      margin: 10
    }
  ];

    return (
      <TouchableOpacity
        style={styles.containerCardItem}
        onPress={() => onPress({ user })}
      >
        <View>
          {image ? <Image source={ {uri: image.cloudinary}} style={imageStyle} />
          :
          <Image 
              source={require('../assets/images/avatarblank.png')}
              style={styles.followerAvatar}/>                                              
          }
          <Text style={styles.descriptionCardItem}>{user.username}</Text>
          {user.status && (
        <View style={styles.status}>
          <View style={user.status === "online" ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{user.status}</Text>
        </View>
        ) }
        </View>
      </TouchableOpacity>
    );
  }
}


CoachListItem.propTypes = {
  user: PropTypes.object,
  onPress: PropTypes.func
};

export default CoachListItem;
