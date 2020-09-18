import React from 'react';
import {
    Button,
    StyleSheet,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions/userActions';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this.signInAsync} />
            </View>
        );
    }

    signInAsync = () => {
        this.props.saveUserToken()
            .then(() => {
                this.props.navigation.navigate('Home');
            })
            .catch((error) => {
                this.setState({ error })
            })
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function mapStateToProps(state){
    return {
            users: state.users,
            isLoading: state.isLoading
           }
}

const mapDispatchToProps = dispatch => ({
    saveUserToken: () => dispatch(saveUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);