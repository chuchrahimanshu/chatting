import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Formik } from "formik";
import { forgetPasswordValidationSchema } from "../../validators/auth.validator";

const ForgetPassword = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const handleFormSubmit = (values) => {};
  const handleResendOTP = () => {};

  const handleSignInNavigation = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialState}
        onSubmit={handleFormSubmit}
        validationSchema={forgetPasswordValidationSchema}>
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
                OTP <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                maxLength={6}
                value={values.otp}
                onChangeText={handleChange("otp")}
              />
              <View style={styles.otpContainer}>
                <Pressable onPress={handleResendOTP}>
                  <Text style={styles.link}>Resend OTP</Text>
                </Pressable>
                <Text style={styles.link}>00:00</Text>
              </View>
              <Text style={styles.label}>
                New Password <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={values.newPassword}
                onChangeText={handleChange("password")}
              />
              <Text style={styles.label}>
                Confirm New Password <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={values.confirmNewPassword}
                onChangeText={handleChange("confirmPassword")}
              />
              <View style={[styles.flexBetween, { alignSelf: "center" }]}>
                <Text style={styles.navigateText}>
                  Remember password?{" "}
                  <Text style={styles.link} onPress={handleSignInNavigation}>
                    Sign In
                  </Text>{" "}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={({ pressed }) => [pressed && styles.pressButton]}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Change Password</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgetPassword;
