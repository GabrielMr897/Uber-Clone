import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import Map from './src/screens/Map/Map';
import Login from './src/screens/Login/Login';
import { propsNavigationStack } from './src/Models';


const Stack = createStackNavigator<propsNavigationStack>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen 
        name="Map" 
        component={Map} 
        options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
