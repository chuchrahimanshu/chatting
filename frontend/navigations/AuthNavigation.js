import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/auth/SignUp";
import SignIn from "../screens/auth/SignIn";
import TFA from "../screens/auth/TFA";
import ForgetPassword from "../screens/auth/ForgetPassword";
import EmailVerification from "../screens/auth/EmailVerification";
import ChangePassword from "../screens/auth/ChangePassword";

const Stack = createNativeStackNavigator();

const AuthNavigation = ({ setIsAuthenticated }) => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
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
        options={{
          title: "Sign In",
        }}
      >
        {(props) => <SignIn {...props} setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          title: "Forget Password",
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: "Change Password",
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
