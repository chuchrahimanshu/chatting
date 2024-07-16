import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/global/Home";

const Stack = createNativeStackNavigator();

const GlobalNavigation = ({ setIsAuthenticated }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        options={{
          title: "Home",
        }}
      >
        {(props) => <Home {...props} setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default GlobalNavigation;
