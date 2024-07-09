import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Formik } from "formik";
import { signUpValidationSchema } from "../../validators/auth.validator";

const SignUp = ({ navigation }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSignInNavigation = () => {
    navigation.navigate("SignIn");
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Formik
        initialValues={initialState}
        onSubmit={handleFormSubmit}
        validationSchema={signUpValidationSchema}>
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.formContainer}>
            <View>
              <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                  <Text style={styles.label}>
                    First Name <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                  />
                </View>
                <View style={styles.inputSubContainer}>
                  <Text style={styles.label}>
                    Last Name <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                  />
                </View>
              </View>
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
              <Text style={styles.label}>
                Confirm Password <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                autoCorrect={false}
                autoCapitalize={false}
                secureTextEntry={true}
                style={styles.input}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
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
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
