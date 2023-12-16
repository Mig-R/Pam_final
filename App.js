// IMPORTANDO A NAVEGAÇÃO
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./src/screens/Login";
import DrawerMenu from "./drawerMenu/DrawerMenu";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerMenu'>

        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: '',
            headerShown: true
          }}
        />

      
        <Stack.Screen
          name='DrawerMenu'
          component={DrawerMenu}
          options={{
            title: '',
            headerShown: false
          }}
        />

        {/* <Stack.Screen
          name='FeedBooks'
          component={FeedBooks}
          options={{
              title: "LIBRI",
              headerTitleStyle: {
              color: '#333',
              fontWeight: 'bold'
            }
          }}
        /> */}


      </Stack.Navigator>
    </NavigationContainer>
  )
}