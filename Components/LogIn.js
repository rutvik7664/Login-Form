import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

export default function LogIn({navigation}) {
  const [second, setSecond] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const transfer = () => {
    if (email === '' || email===null && password === '' || password===null) {
      Alert.alert('Thank You! You have successfully Log in');
      navigation.navigate('Home');
    } else {
      Alert.alert('Please enter your email and password');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="E-mail or Phone Number"
          value={email}
          onChangeText={useData => setEmail(useData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={useData => setPassword(useData)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => transfer()}>
          <Text style={styles.buttonTextColor}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>or</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.facebook.com/')}>
        <Text style={[styles.buttonTextColor, styles.buttonTextColor2]}>
          Login with Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    margin: 50,
  },
  inputContainer: {
    marginTop: 30,
  },
  inputStyle: {
    borderWidth: 2,
    borderRadius: 40,
    borderColor: 'gray',
    paddingVertical: 8,
    paddingLeft: 23,
    fontSize: 15,
    fontWeight: '500',
    width: Dimensions.get('screen').width - 80,
    color: '#A7727D',
  },
  buttonTextColor: {
    borderRadius: 40,
    paddingVertical: 5,
    margin: 50,
    fontSize: 20,
    fontWeight: '500',
    width: Dimensions.get('screen').width - 120,
    textAlign: 'center',
    backgroundColor: '#A7727D',
    color: '#ECF9FF',
  },
  buttonTextColor2: {
    backgroundColor: '#1877f2',
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
