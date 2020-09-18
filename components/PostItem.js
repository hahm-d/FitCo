import React from 'react';
import styles from '../assets/styles';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { fetchPost } from '../actions/postActions';
import { connect } from 'react-redux';

const PostItem = ({
    id,
 actions,
  title,
  content,
  url,
  views,
  likes,
  onPressLeft,
  onPressRight,
  variant
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 20
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* URL */}
      <Image source={url} style={imageStyle} />

      {/* TITLE */}
      <Text style={nameStyle}>Title: {title}</Text>

     {/* Views */}
     <Text style={nameStyle}>Views: {views}</Text>

     <Text>Likes: {likes}</Text>   

      {/* content */}
    <Text style={styles.descriptionCardItem}>Content: {content}</Text>


      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.star}>
              <Icon name="star" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Text style={styles.like}>
              <Icon name="like" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressRight()}
          >
            <Text style={styles.dislike}>
              <Icon name="dislike" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.flash}>
              <Icon name="flash" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


function mapStateToProps(state){
    return {
            post: state.post,
           }
}

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);