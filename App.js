// React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "react-native";

// Fonts
import { useFonts } from "expo-font";

// Screens
import Home from "./screens/Home/Home";
import Details from "./screens/Details/Details";
import { COLORS } from "./constants";

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
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  // Fonts will not be loaded initially
  if (!loaded) return null;

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
