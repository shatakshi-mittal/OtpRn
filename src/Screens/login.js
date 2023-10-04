import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  useEffect(() => {
    if (mobileNumber.length === 10) {
      navigation.navigate('OTP', {mobileNumber});
    }
  }, [mobileNumber, navigation]);
  return (
    <ImageBackground
      source={require('../Images/bgs.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.tile}>
          <Text style={styles.title1}>MEDIA</Text>
          <Text style={styles.subtitle}>CLINIQUE</Text>
        </View>
        <View style={styles.Enjoy}>
          <Text style={styles.infoText}>
            Enjoy Over 100,000 Movies and Series Only On One Place.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.title}>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>Sign-in </Text>
              and Enjoy{' '}
              <Text style={{color: '#fff'}}>
                thousands of Movies and Series from our library.
              </Text>
            </Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={{color: '#fff'}}
              keyboardType="numeric"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChangeText={async text => {
                setMobileNumber(text);
                // navigation.navigate('OTP', {mobileNumber});
                if (text.length == 10) {
                  console.log(text.length == 10);

                  await auth()
                    .signInWithPhoneNumber(`+91${text}`)
                    .then(res => {
                      console.log('confirmation', res.confirm());
                    })
                    .catch(e => {
                      console.log(e);
                    });
                }
              }}
              maxLength={10}
            />
          </View>
          <View style={{marginTop: 54}}>
            <Text style={{color: '#4A4C55'}}>
              -------------------- New User? ---------------------
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  tile: {
    backgroundColor: '#112435',
    borderRadius: 1,
    height: 200,
    width: 300,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 30,
    color: 'white',
  },
  title1: {
    fontSize: 34,
    marginTop: 15,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  subtitle: {
    fontSize: 34,
    color: 'white',
  },
  inputContainer: {
    backgroundColor: '#282838',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 300,
    width: 350,
    marginBottom: 100,
  },
  Enjoy: {
    marginTop: 1,
  },
  infoText: {
    margin: 16,
    color: '#fff',
  },
  input: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    alignSelf: 'center',
    width: 250,
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#000',
  },
});

export default LoginScreen;
