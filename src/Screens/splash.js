import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      navigation.navigate('Login');
    }, 4000);
    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/splash.jpg')}
        style={styles.splashImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // You can adjust the alignment as needed
  },
  splashImage: {
    flex: 1,
    width: '100%', // Set width to 100%
    height: '100%', // Set height to 100%
    resizeMode: 'cover',
  },
});

export default SplashScreen;
