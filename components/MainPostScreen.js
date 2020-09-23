import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

class MainPostScreen extends React.Component {

  onPressComment = () => {

  };

  render() {
    const { title, content, likes, views, image } = this.props;

    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{title}</Text>
        <Image source={ {uri: image.cloudinary}} style={styles.image} />
        <Text>{content}</Text>
        <Text>likes: {likes}</Text>
        <Text>views: {views}</Text>
        <TouchableOpacity
          style={styles.postCommentContainer}
          onPress={this.onPressComment}> 
          <Text style={styles.postCommentContainer}> Add Comments </Text>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 10
  },
  postTitle: {
    marginBottom: 5
  },
  postCommentContainer: {
    marginTop: 5,
    alignSelf: "flex-end",
    flexDirection: "row"
  },
  postCommentIcon: {
    color: "black",
    marginRight: 5
  },
  postCommentLink: {
    color: "black"
  },
  image: {
    borderRadius: 8,
    width: 80,
    height: 80,
    margin: 2  
  }
});

export default MainPostScreen;
