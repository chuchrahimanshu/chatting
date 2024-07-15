import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { useEffect, useRef, useState } from "react";
import OTPField from "../../components/forms/OTPField";
import AuthHeader from "../../components/auth/AuthHeader";
import { useDispatch } from "react-redux";
import { verifyForgetPasswordOTP } from "../../redux/auth/auth.slice";

const ForgetPassword = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const otpFields = new Array(6).fill("");

  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [OTP, setOTP] = useState([...otpFields]);

  const handleFormSubmit = async () => {
    let OTPToken = "";
    OTP.map((digit) => (OTPToken = OTPToken + digit));

    if (OTPToken.length !== 6) {
      return Alert.alert("Invalid OTP", "Please provide a valid 6 digit OTP");
    }

    const apiResult = await dispatch(
      verifyForgetPasswordOTP({
        bodyData: {
          email: route.params.email,
          otp: OTPToken,
        },
      })
    );

    if (apiResult?.meta?.requestStatus === "fulfilled") {
      Alert.alert(
        "OTP Verified!",
        "You have successfully verified the OTP and now redirecting to change password"
      );
      navigation.navigate("ChangePassword");
    }
    if (apiResult?.meta?.requestStatus === "rejected") {
      Alert.alert("Sign Up Failed!", apiResult.payload);
    }
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
    if (!route.params.email) {
      Alert.alert("Please enter a valid email address");
      navigation.navigate("SignIn");
      return;
    }

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
          <Text style={styles.notiLabel}>
            Check your registered email address
          </Text>
          <View style={styles.otpContainer}>
            {otpFields.map((_, index) => (
              <OTPField
                key={index}
                ref={activeOTPIndex === index ? inputRef : null}
                onKeyPress={({ nativeEvent }) => {
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
