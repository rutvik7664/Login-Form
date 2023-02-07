import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function SignUp({navigation}) {
  const [first, setFirst] = useState('');
  const [name, setName] = useState('');
  const [Number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const transfer = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Full Name"
          value={setName}
          onChangeText={useData => setName(useData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone Number"
          value={setNumber}
          onChangeText={useData => setNumber(useData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="E-mail Address"
          value={setEmail}
          onChangeText={useData => setEmail(useData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          secureTextEntry={true}
          value={setPassword}
          onChangeText={useData => setPassword(useData)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => transfer()}>
          <Text style={styles.buttonTextColor}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    paddingVertical: 7,
    margin: 50,
    fontSize: 17,
    fontWeight: '500',
    width: Dimensions.get('screen').width - 120,
    textAlign: 'center',
    backgroundColor: '#A7727D',
    color: '#ECF9FF',
  },
});
