import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default class App extends Component {

  state = {
    userName: "",
    password: ""
  };

  userNameChangedHandler = val => {
    this.setState({
      userName: val
    });
  };
  passwordChangedHandler = val => {
    this.setState({
      password: val
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Login</Text> 
        <TextInput
          style={{width: 300}}
          placeholder="Username"
          value={this.state.userName}
          onChangeText={this.userNameChangedHandler}
        />
        <TextInput
          style={{width: 300}}
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.passwordChangedHandler}
        />

        <View style={styles.buttonContainer}>
          <Button
            // On press of button-->> onclick in android with no return-type
            onPress={() => {
              // Alert.alert('Login Successsful!');
              // Works on both iOS and Android
                Alert.alert(
                  'Trio',
                  'Login Successfull.',
                  [
                    {text: 'I am feeling Lucky!', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )
            }}
            title="Login"
            color="#841584"
            />
        </View>
       
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, buttonContainer: {
    //flex: 1,
    width:"100%",
    padding: 26,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
