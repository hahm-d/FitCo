import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import Video from 'react-native-video';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
            <Video
                repeat
                source={{ uri:'https://res.cloudinary.com/dkagcuui6/video/upload/v1600989182/homeworkout_videos_107997429_108027144236730_6710574680008345028_n_sxzd0q.mp4'}}
                resizeMode="cover"
                muted
                rate={1.0}

                style={StyleSheet.absoluteFill}
                />
          
        <View style={styles.header}>
            <Animatable.Image 
                animation="fadeInLeft"
                duraton="2000"
            source={require('../assets/images/logo1.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInRight"
            duraton="2000"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Coach. Learn. Grow.</Text>
            <Text style={styles.text}>network and share </Text>
            <View style={styles.buttons}>
            <TouchableOpacity 
                onPress={()=>navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                    borderColor: '#009387',
                    borderWidth: 3,
                    marginTop: 10
                }]}>
            <Animatable.Text animation="zoomInLeft"  duraton="3000" direction="alternate" style={[styles.textSign, {color: '#009387'}]}> Sign In </Animatable.Text>  
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=>navigation.navigate('RegisterScreen')}
                style={[styles.signIn, {
                    borderColor: '#009387',
                    borderWidth: 3,
                    marginTop: 10
                }]}>
            <Animatable.Text animation="zoomInLeft"  duraton="3000" direction="alternate" style={[styles.textSign, {color: '#009387'}]}> Register </Animatable.Text>  
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000000'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: .5,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
  },
  logo: {
      width: height_logo,
      height: height_logo,
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  buttons: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 40
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      flexDirection: 'row',
      color: '#4682B4'
  }
});