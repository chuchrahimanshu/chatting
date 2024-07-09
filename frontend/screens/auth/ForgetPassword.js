import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Formik } from "formik";
import { forgetPasswordValidationSchema } from "../../validators/auth.validator";
import { useEffect, useRef, useState } from "react";
import OTPField from "../../components/forms/OTPField";

const ForgetPassword = ({ navigation }) => {
  const inputRef = useRef(null);
  const otpFields = new Array(6).fill("");

  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [OTP, setOTP] = useState([...otpFields]);

  const initialState = {
    email: "",
    password: "",
  };

  const handleFormSubmit = (values) => {};

  const handleSignInNavigation = () => {
    navigation.navigate("SignIn");
  };

  const handleOTPChange = (key, index) => {
    const updatedOTP = [...OTP];

    console.log(updatedOTP);

    if (key === "Backspace") {
      if (updatedOTP[index] === "") {
        setActiveOTPIndex(index - 1);
      } else {
        updatedOTP[index] = "";
      }
    } else {
      setActiveOTPIndex(index + 1);
      updatedOTP[index] = key;
    }

    setOTP([...updatedOTP]);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Forget Password</Text>
      <Formik
        initialValues={initialState}
        onSubmit={handleFormSubmit}
        validationSchema={forgetPasswordValidationSchema}>
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.label}>
                Enter your 6 digit OTP <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.otpContainer}>
                {otpFields.map((_, index) => (
                  <OTPField
                    key={index}
                    ref={activeOTPIndex === index ? inputRef : null}
                    onKeyPress={({ nativeEvent }) => {
                      console.log(nativeEvent.key);
                      handleOTPChange(nativeEvent.key, index);
                    }}
                    activeOTPIndex={activeOTPIndex}
                    index={index}
                    value={OTP[index]}
                  />
                ))}
              </View>
              <View style={[styles.flexBetween, { alignSelf: "center" }]}>
                <Text style={styles.link} onPress={handleSignInNavigation}>
                  Wrong email address?
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={({ pressed }) => [pressed && styles.pressButton]}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Verify OTP</Text>
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
