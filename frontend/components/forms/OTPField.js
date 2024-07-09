import { forwardRef } from "react";
import { styles } from "../../styles/auth.styles";
import { TextInput, View } from "react-native";

const OTPField = forwardRef((props, ref) => {
  return (
    <View
      style={[
        styles.otpBox,
        props.activeOTPIndex === props.index
          ? { borderWidth: 2, borderColor: "black" }
          : null,
      ]}>
      <TextInput
        style={styles.otpInput}
        ref={ref}
        onKeyPress={props.onKeyPress}
        keyboardType="number-pad"
        cursorColor="black"
        value={props.value}
      />
    </View>
  );
});

export default OTPField;
