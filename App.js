import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Login } from './components/Login/index';
import { Register } from './components/Register';
import { Rent } from './components/Rent';
import { Car } from './components/Car';

let users = [
  { email: "hjose@gmail.com", name: "Jose", password: "123" },
  { email: "luisperalta@gmail.com", name: "peralta", password: "123" },

]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'   
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{ title: 'Login' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'gray',
        tabBarInactiveBackgroundColor: 'white',
      }}
    >
      <Tab.Screen name='Login' component={Login}  options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="person" size={22} />),
        tabBarStyle: { display: 'none' }
      }}
      />
      <Tab.Screen name='Car' component={Car} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="directions-car" size={22} />)
      }} />
      <Tab.Screen name='Rent' component={Rent} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="car-rental" size={22} />)
      }} />
      <Tab.Screen name='Register' component={Register} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="create" size={22} />),
        tabBarStyle: { display: 'none' }
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
