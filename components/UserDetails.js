import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * A reusable card that renders the details of a user
 */

class UserDetails extends React.Component {
  render() {
    const { username, email } = this.props;

    return (
      <View style={styles.userCard}>
        <View style={styles.userIcon}>
          <Text style={styles.userInitials}>{username}</Text>
        </View>
        <View style={styles.userInfo}>
          {username && <Text style={styles.userLabel}>{username}</Text>}
          {email && <Text style={styles.userLabel}>{email}</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20
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
