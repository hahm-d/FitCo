import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class CoachListItem extends Component {
  render() {
    const { user, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPress({ user })}
      >
        <View>
          <Text>{user.username}</Text>
          <Text>{user.status}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 30,
  }
});

CoachListItem.propTypes = {
  user: PropTypes.object,
  onPress: PropTypes.func
};

export default CoachListItem;
