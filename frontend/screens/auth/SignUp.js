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
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/auth.slice";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleSignInNavigation = () => {
    navigation.navigate("SignIn");
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !password?.trim() ||
      !confirmPassword?.trim()
    ) {
      return Alert.alert(
        "Missing Values!",
        "Please provide all required details."
      );
    }

    if (password !== confirmPassword) {
      return Alert.alert(
        "Passwords didn't matched!",
        "Password and confirm password must be same."
      );
    }
    const apiResult = await dispatch(
      signUp({
        bodyData: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
      })
    );

    if (apiResult?.meta?.requestStatus === "fulfilled") {
      setFormData(initialState);
      Alert.alert(
        "Sign Up Success!",
        "You have successfully signed up and now redirecting to sign in"
      );
      navigation.navigate("SignIn");
    }
    if (apiResult?.meta?.requestStatus === "rejected") {
      Alert.alert("Sign Up Failed!", apiResult.payload);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="Sign Up" showIcon={false} />
      <View style={styles.formContainer}>
        <View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <Text style={styles.label}>
                First Name <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                name="firstName"
                style={styles.input}
                cursorColor="black"
                value={formData.firstName}
                onChangeText={handleInputChange.bind(this, "firstName")}
              />
            </View>
            <View style={styles.inputSubContainer}>
              <Text style={styles.label}>
                Last Name <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                name="lastName"
                style={styles.input}
                cursorColor="black"
                value={formData.lastName}
                onChangeText={handleInputChange.bind(this, "lastName")}
              />
            </View>
          </View>
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
          <Text style={styles.label}>
            Confirm Password <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            name="confirmPassword"
            autoCorrect={false}
            autoCapitalize={false}
            secureTextEntry={true}
            style={styles.input}
            cursorColor="black"
            value={formData.confirmPassword}
            onChangeText={handleInputChange.bind(this, "confirmPassword")}
          />
          <View style={[styles.flexBetween, { alignSelf: "center" }]}>
            <Text style={styles.navigateText}>
              Already a member?{" "}
              <Text style={styles.link} onPress={handleSignInNavigation}>
                Sign In
              </Text>{" "}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [pressed && styles.pressButton]}
              onPress={handleFormSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
