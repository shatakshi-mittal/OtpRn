import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Images/bgs.jpg')}
        style={styles.backgroundImage}>
        <Text style={styles.text}>Verified successfully</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
