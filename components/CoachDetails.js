import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CoachDetails extends Component {

  render() {
    const { username, email, instagram, twitter, description, status } = this.props;

    return (
      <View style={styles.userCard}>
        <View style={styles.userIcon}>
          <Text style={styles.userInitials}>COACH</Text>
        </View>
        <View style={styles.userInfo}>
          {username && <Text style={styles.userLabel}>{username}</Text>}
          {email && <Text style={styles.userLabel}>{email}</Text>}
          {instagram && <Text style={styles.userLabel}>{instagram}</Text>}
          {twitter && <Text style={styles.userLabel}>{twitter}</Text>}
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
    color: "black"
  },
  userInfo: {
    flex: 1
  },
  userLabel: {
    marginBottom: 5
  }
});

export default CoachDetails;
