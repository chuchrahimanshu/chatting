import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/global/Home";
import Chat from "../screens/global/Chat";

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
        }}>
        {(props) => <Home {...props} setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chat",
        }}
      />
    </Stack.Navigator>
  );
};

export default GlobalNavigation;
