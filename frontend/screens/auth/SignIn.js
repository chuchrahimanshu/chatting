import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Formik } from "formik";
import { signInValidationSchema } from "../../validators/auth.validator";

const SignIn = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const handleFormSubmit = (values) => {};

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  const handleSignUpNavigation = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <Formik
        initialValues={initialState}
        onSubmit={handleFormSubmit}
        validationSchema={signInValidationSchema}>
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.label}>
                Email Address <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <Text style={styles.label}>
                Password <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                autoCorrect={false}
                autoCapitalize={false}
                secureTextEntry={true}
                style={styles.input}
                value={values.password}
                onChangeText={handleChange("password")}
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
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignIn;
