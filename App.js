// React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Fonts
import { useFonts } from "expo-font";

// Screens
import Home from "./screens/Home/Home";
import Details from "./screens/Details/Details";

// Stack Navigator
const Stack = createStackNavigator();

// Theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

// App
const App = () => {
  // initializing fonts
  const [loaded] = useFonts({
    
  })
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
