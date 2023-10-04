import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OTPVerification = () => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');

  const otp1Ref = useRef();
  const otp2Ref = useRef();
  const otp3Ref = useRef();
  const otp4Ref = useRef();
  const otp5Ref = useRef();
  const otp6Ref = useRef();

  const navigation = useNavigation();

  const handleOTPChange = (text, ref, nextRef) => {
    if (/^\d$/.test(text)) {
      ref.current.focus();
    }
    if (nextRef && text !== '') {
      nextRef.current.focus();
    }
  };

  const handleSubmit = () => {
    console.log('OTP Submitted:', otp1 + otp2 + otp3 + otp4 + otp5 + otp6);
    Keyboard.dismiss();
    navigation.navigate('Home');
  };
  return (
    <ImageBackground
      source={require('../Images/bgs.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.tile}>
          <Text style={styles.title1}>MEDIA</Text>
          <Text style={styles.subtitle}>CLINIQUE</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.heading}>Otp Verification</Text>
          <Text style={styles.subHeading}>
            This Verification is essential for 2-Step Verification and making
            your account secure in any case of loss.
          </Text>
          <View style={styles.otpContainer}>
            <TextInput
              style={[styles.otpInput, {color: 'white'}]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                setOtp1(text);
                handleOTPChange(text, otp1Ref, otp2Ref);
              }}
              value={otp1}
              ref={otp1Ref}
            />
            <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                setOtp2(text);
                handleOTPChange(text, otp2Ref, otp3Ref);
              }}
              value={otp2}
              ref={otp2Ref}
            />
            <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                setOtp3(text);
                handleOTPChange(text, otp3Ref, otp4Ref);
              }}
              value={otp3}
              ref={otp3Ref}
            />
            <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                setOtp4(text);
                handleOTPChange(text, otp4Ref, otp5Ref);
              }}
              value={otp4}
              ref={otp4Ref}
            />
            <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                setOtp5(text);
                handleOTPChange(text, otp5Ref, otp6Ref); // Link to the new OTP input
              }}
              value={otp5}
              ref={otp5Ref}
            />
            <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                setOtp6(text);
                handleOTPChange(text, otp6Ref, null); // No next OTP input
              }}
              value={otp6}
              ref={otp6Ref}
            />
          </View>
          <Text style={{marginRight: 270, color: 'white'}}>Resend OTP</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginBottom: 30,
              marginTop: 30,
              alignSelf: 'center',
            }}>
            The OTP has been sent to your personal number ending with XXXX
            please Do not share it with others.
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              otp1 && otp2 && otp3 && otp4
                ? styles.validButton
                : styles.invalidButton,
            ]}
            onPress={handleSubmit}
            disabled={!otp1 || !otp2 || !otp3 || !otp4}>
            <Text style={{color: 'white', fontSize: 16}}>Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              otp1 && otp2 && otp3 && otp4
                ? styles.validButton
                : styles.invalidButton,
            ]}
            onPress={handleSubmit}
            disabled={!otp1 || !otp2 || !otp3 || !otp4}>
            <Text style={{color: 'white', fontSize: 16}}>
              Having Issue? Change Number !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    color: 'white',
  },
  inputContainer: {
    backgroundColor: '#282838',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    marginHorizontal: 5,
    color: 'white',
  },
  button: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 345,
  },
  validButton: {
    backgroundColor: 'blue',
  },
  invalidButton: {
    backgroundColor: 'gray',
  },
  tile: {
    backgroundColor: '#112435',
    borderRadius: 1,
    height: 200,
    width: 300,
    alignItems: 'center',
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default OTPVerification;
