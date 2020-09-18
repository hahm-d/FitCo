import React from 'react';
import {connect} from 'react-redux';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { fetchUsers } from '../actions/actions';

class UserTest extends React.Component {

/*     renderAstro = () => {
        return this.props.astronauts.map(astro => <Text>{astro.people.name}</Text> )
    } */

    render(){
        console.log(this.props.users)
        return(
            <>
            <Text style={{ justifyContent: 'center', paddingTop: 80, fontSize: 20}} >Fetch Users</Text>
            {this.props.isLoading ?
                    <ActivityIndicator />
                :
                    <View style={{ justifyContent: 'center', paddingTop: 80}}>
                    <Button title="Load Data" onPress={() => this.props.fetchUsers()}/>
                        <FlatList
                            data={this.props.users["people"]}
                            renderItem={({item}) => <Text >{item.name}</Text>}
                        />
                    </View>
            }
           </>
        )
    }

}
//get the astro state from store 
function mapStateToProps(state){
    return {
            users: state.users,
            isLoading: state.isLoading
           }
}

//do the fetch request to actions / reducer
function mapDispatchToProps(dispatch){
    return { fetchUsers: () => dispatch(fetchUsers()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTest)