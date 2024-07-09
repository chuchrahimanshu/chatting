import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/auth/SignUp";
import SignIn from "../screens/auth/SignIn";
import TFA from "../screens/auth/TFA";
import ForgetPassword from "../screens/auth/ForgetPassword";
import EmailVerification from "../screens/auth/EmailVerification";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Sign Up",
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
        }}
      />
      <Stack.Screen
        name="TFA"
        component={TFA}
        options={{
          title: "Two Factor Authentication",
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          title: "Forget Password",
        }}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{
          title: "Email Verification",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
