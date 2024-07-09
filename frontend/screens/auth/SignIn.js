import {
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "../../styles/auth.styles";
import { useState } from "react";
import AuthHeader from "../../components/auth/AuthHeader";

const SignIn = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = () => {
    const { email, password } = formData;

    if (!email?.trim() || !password?.trim()) {
      return Alert.alert(
        "Missing Values!",
        "Please provide all required details."
      );
    }
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  const handleSignUpNavigation = () => {
    navigation.navigate("SignUp");
  };

  const handleBackButton = () => {
    navigation.navigate("SignUp");
  };

  const handleEmailVerification = () => {
    navigation.navigate("EmailVerification");
  };

  const handleTFA = () => {
    navigation.navigate("TFA");
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="Sign In" onPress={handleBackButton} />
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>
            Email Address <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            name="email"
            style={styles.input}
            cursorColor="black"
            value={formData.email}
            onChangeText={handleInputChange.bind(this, "email")}
          />
          <Text style={styles.label}>
            Password <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            name="password"
            autoCorrect={false}
            autoCapitalize={false}
            secureTextEntry={true}
            style={styles.input}
            cursorColor="black"
            value={formData.password}
            onChangeText={handleInputChange.bind(this, "password")}
          />
          <View style={styles.flexBetween}>
            <Text style={styles.navigateText}>
              New to App?{" "}
              <Text style={styles.link} onPress={handleSignUpNavigation}>
                Sign Up
              </Text>{" "}
            </Text>
            <Pressable onPress={handleForgetPassword}>
              <Text style={styles.link}>Forget Password</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [pressed && styles.pressButton]}
              onPress={handleFormSubmit}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
          </View>
          <View style={styles.flexBetween}>
            <Text style={styles.link} onPress={handleEmailVerification}>
              Email Verification
            </Text>
            <Text style={styles.link} onPress={handleTFA}>
              TFA
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
