import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

class CoachListItem extends Component {
  render() {
    const { user, image, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPress({ user })}
      >
        <View>
          {image && <Image source={ {uri: image.cloudinary}} style={styles.image} />}
          <Text>{user.username}</Text>
          <Text> [light icon here]  {user.status}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  image: {
    borderRadius: 8,
    width: 180,
    height: 180,
    margin: 2  
  }
});


CoachListItem.propTypes = {
  user: PropTypes.object,
  onPress: PropTypes.func
};

export default CoachListItem;
