import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './components/Button';

const Stack = createNativeStackNavigator();
const Logo = require('./assets/MMlogo.png');
const ready_to_eat = require('./assets/ready_to_eat.png');
import LogoViewer from './components/LogoViewer';
import PhotoViewer from './components/PhotoViewer';


function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LogoViewer placeholderImageSource={Logo} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="LOGIN" onPress={() => navigation.navigate('Login')}/>
        <Button label="REGISTER" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function Login() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Success!', `Email: ${formData.email}, Password: ${formData.password}`);
  };
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer2}>
          <PhotoViewer placeholderImageSource={ready_to_eat} />
        </View>
      <View style={styles.footerContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
      />
      <Button label="LOGIN" title="Login" onPress={handleSubmit} />
      <StatusBar style="auto" />
    </View>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 2/3,
    width: '80%', // Adjust width as needed
    alignItems: 'center',
  }, 
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer2: {
    flex: 1/3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100, 
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 25,
    paddingHorizontal: 8,
    borderRadius: 20,
    
  },
});
