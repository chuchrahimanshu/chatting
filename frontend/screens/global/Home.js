import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Button, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/auth/auth.slice";

const Home = ({ setIsAuthenticated }) => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    const apiResult = await dispatch(signOut({
      bodyData: {
        accessToken: accessToken
      }
    }));
    await AsyncStorage.removeItem("token");
    setIsAuthenticated(false);
    if (apiResult?.meta?.requestStatus === "fulfilled") {
      Alert.alert(
        "Sign Out Success!",
        "You have successfully signed out and now redirecting to Sign In"
      );
    }
    if (apiResult?.meta?.requestStatus === "rejected") {
      Alert.alert("Sign Out Failed!", apiResult.payload);
    }
  }

  return (
    <View style={styles.container} >
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
})

export default Home;
