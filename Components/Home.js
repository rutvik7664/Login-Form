import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

export default function Home({navigation}) {
  const [goto, setGoto] = useState();

  const onclick = () => {
    navigation.navigate('LogIn');
  };
  const onchange = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <Text style={styles.headerText}>Hello!! Welcome To My New App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onclick(setGoto())}>
          <Text style={styles.buttonTextColor1}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onchange(setGoto())}>
          <Text style={styles.buttonTextColor2}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ECF9FF',
  },
  mainHeader: {
    marginBottom: 50,
    width: Dimensions.get('screen').width - 60,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '500',
    marginTop: 200,
    lineHeight: 40,
    color: '#A7727D',
    paddingLeft: 20,
  },

  buttonStyle: {
    marginTop: 10,
  },

  buttonTextColor1: {
    borderWidth: 2,
    borderColor: '#A7727D',
    borderRadius: 40,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: '500',
    width: Dimensions.get('screen').width - 100,
    textAlign: 'center',
    backgroundColor: '#A7727D',
    color: '#ECF9FF',
  },
  buttonTextColor2: {
    borderWidth: 2,
    borderColor: '#A7727D',
    borderRadius: 40,
    paddingVertical: 5,
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
    width: Dimensions.get('screen').width - 100,
    textAlign: 'center',
    color: '#A7727D',
  },
});
