import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/global/Home";

const Stack = createNativeStackNavigator();

const GlobalNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
    </Stack.Navigator>
  );
};

export default GlobalNavigation;
