import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class CoachDetails  extends React.Component {

  render() {
    const { username, email, instagram, twitter, description, status, image } = this.props;

    return (
      <View style={styles.userCard}>
        <View style={styles.userIcon}>
          {image ? 
            <Image source={ {uri: image.cloudinary}} style={styles.image} />
          :
            null 
          }
        </View>
        <View style={styles.userInfo}>
          {username && <Text style={styles.userLabel}>User: {username}</Text>}
          {email && <Text style={styles.userLabel}>Email: {email}</Text>}
          {instagram && <Text style={styles.userLabel}>Instagram: {instagram}</Text>}
          {twitter && <Text style={styles.userLabel}>Twitter: {twitter}</Text>}
          {description && <Text style={styles.userLabel}>{description}</Text>}
          {status && <Text style={styles.userLabel}>{status}</Text>}
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
    marginTop: 30
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
    color: "black"
  },
  userInfo: {
    flex: 1
  },
  userLabel: {
    marginBottom: 5
  },
  image: {
    borderRadius: 8,
    width: 120,
    height: 120,
    margin: 3  
  }
});

export default CoachDetails;
