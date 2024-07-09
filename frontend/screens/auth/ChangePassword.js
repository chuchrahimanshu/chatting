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

const ChangePassword = () => {
  const initialState = {
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    const { password, confirmPassword } = formData;

    if (!password?.trim() || !confirmPassword?.trim()) {
      return Alert.alert(
        "Missing Details!",
        "Please provide all required details"
      );
    }

    if (password !== confirmPassword) {
      return Alert.alert(
        "Password didn't match!",
        "Password and confirm password must be same."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Change Password</Text>
      <View style={styles.formContainer}>
        <View>
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
            autoCorrect={false}
            autoCapitalize={false}
            secureTextEntry={true}
            style={styles.input}
            cursorColor="black"
            value={formData.confirmPassword}
            onChangeText={handleInputChange.bind(this, "confirmPassword")}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [pressed && styles.pressButton]}
              onPress={handleFormSubmit}>
              <Text style={styles.buttonText}>Update Password</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
