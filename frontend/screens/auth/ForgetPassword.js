import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { useEffect, useRef, useState } from "react";
import OTPField from "../../components/forms/OTPField";
import AuthHeader from "../../components/auth/AuthHeader";

const ForgetPassword = ({ navigation }) => {
  const inputRef = useRef(null);
  const otpFields = new Array(6).fill("");

  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [OTP, setOTP] = useState([...otpFields]);

  const handleFormSubmit = () => {
    let OTPToken = "";
    OTP.map((digit) => (OTPToken = OTPToken + digit));

    if (OTPToken.length !== 6) {
      return Alert.alert("Invalid OTP", "Please provide a valid 6 digit OTP");
    }
    navigation.navigate("ChangePassword");
  };

  const handleSignInNavigation = () => {
    navigation.navigate("SignIn");
  };

  const handleOTPChange = (key, index) => {
    const updatedOTP = [...OTP];

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

  const handleBackButton = () => {
    navigation.navigate("SignIn");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="Forget Password" onPress={handleBackButton} />
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
          <View style={styles.flexBetween}>
            <Text style={styles.link}>Resend OTP</Text>
            <Text style={styles.navigateText}>00:00</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [pressed && styles.pressButton]}
              onPress={handleFormSubmit}>
              <Text style={styles.buttonText}>Verify OTP</Text>
            </Pressable>
          </View>
          <View style={[styles.flexBetween, { alignSelf: "center" }]}>
            <Text style={styles.link} onPress={handleSignInNavigation}>
              Wrong email address?
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
