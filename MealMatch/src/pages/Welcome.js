import * as React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native'; // Correct imports for React Native components
const MMlogo = require('../assets/images/MMlogo.png'); // Correct path to the image

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={MMlogo} style={styles.logo} /> {/* Correct usage of Image component */}
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Welcome;
