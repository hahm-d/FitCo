//https://stackoverflow.com/questions/56922180/error-react-native-cli-uses-autolinking-for-native-dependencies-but-the-followi
module.exports = {
    dependencies: {
      '<dependency>': {
        platforms: {
          android: null, // disable Android platform, other platforms will still autolink
        },
      },
    },
};