import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Button, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/auth/auth.slice";
import Logo from "../../assets/Chat.png";
import User from "../../assets/user.png";
import { useState } from "react";

const Home = ({ setIsAuthenticated }) => {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

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
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Image source={User} style={styles.user} />
        {showMenu && <View style={styles.userMenu}>

        </View>}
      </View>
      {/* <Button title="Sign Out" onPress={handleSignOut} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center"
  },
  header: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    maxHeight: 64,
    maxWidth: 64
  },
  user: {
    maxHeight: 55,
    maxWidth: 55
  }
})

export default Home;
