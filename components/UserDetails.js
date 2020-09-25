import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class UserDetails extends React.Component {
  render() {
    const { username, email, image, instagram, status, twitter, description } = this.props;
    return (
      <View style={styles.userCard}>
        <View style={styles.userIcon}>
        {image ? 
            <Image source={ {uri: image.cloudinary}} style={styles.image} />
          :
            <Text>no avatar</Text>
          }
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userLabel}>User: {username}</Text>
          <Text style={styles.userLabel}>Email: {email}</Text>
          <Text style={styles.userLabel}>Instagram: {instagram}</Text>
          <Text style={styles.userLabel}>Twitter: {twitter}</Text>
          <Text style={styles.userLabel}>Description: {description}</Text>
          <Text style={styles.userLabel}>Status: {status}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginTop: 40,
  },
  userIcon: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",

  },
  userInitials: {
    color: "white",
  },
  userInfo: {
    flex: 1
  },
  userLabel: {
    marginBottom: 5
  }
});

export default UserDetails;
