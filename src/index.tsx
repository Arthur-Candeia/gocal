import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {StatusBar} from 'expo-status-bar';
import { useFonts, OpenSans_600SemiBold, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans'
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { MainContextProvider } from "./contexts/MainContext";
import { Result } from "./pages/Result";

const Stack = createStackNavigator()

export function StackProvider() {
  const [fontsLoaded] = useFonts({OpenSans_600SemiBold, OpenSans_800ExtraBold})
  if (!fontsLoaded) return

  return (
    <NavigationContainer>
      <MainContextProvider>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
        <StatusBar style="inverted" backgroundColor="transparent"/>
      </MainContextProvider>
    </NavigationContainer>
  )
}