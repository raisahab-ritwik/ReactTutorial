import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {

  state = {
    placeName: "",
    password: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
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
        <Text>Trio Dashboard!</Text> 
        <TextInput
          style={{width: 300}}
          placeholder="Username"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <TextInput
          style={{width: 300}}
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.passwordChangedHandler}
        />

        <View style={styles.buttonContainer}>
          <Button

            title="Login"
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
    justifyContent: 'flex-start',
  }, buttonContainer: {
    //flex: 1,
    width:"100%",
    padding: 26,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
