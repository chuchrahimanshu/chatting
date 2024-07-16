import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import User from "../../assets/user.jpg";
import { signOut } from "../../redux/auth/auth.slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const Header = ({ showMenu, setShowMenu, setIsAuthenticated }) => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    const apiResult = await dispatch(
      signOut({
        bodyData: {
          accessToken: accessToken,
        },
      })
    );
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
  };

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>LOGO</Text>
      <Pressable onPress={() => setShowMenu((prevState) => !prevState)}>
        <Image source={User} style={styles.user} />
      </Pressable>
      {showMenu && (
        <View style={styles.userMenu}>
          <Pressable
            style={({ pressed }) => [pressed ? styles.btnPressed : null]}>
            {({ pressed }) => (
              <View style={styles.menuButtonContainer}>
                <Text
                  style={[
                    styles.menuLinkText,
                    pressed ? { color: "white" } : { color: "black" },
                  ]}>
                  Profile
                </Text>
              </View>
            )}
          </Pressable>
          <Pressable
            style={({ pressed }) => [pressed ? styles.signOutPressed : null]}
            onPress={handleSignOut}>
            {({ pressed }) => (
              <View style={styles.menuButtonContainer}>
                <Text
                  style={[
                    styles.menuLinkText,
                    pressed ? { color: "white" } : { color: "black" },
                  ]}>
                  Sign Out
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    maxHeight: 90,
    zIndex: 50,
    paddingHorizontal: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
  },
  user: {
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: 100,
  },
  userMenu: {
    position: "absolute",
    top: 75,
    right: 5,
    backgroundColor: "#dddddd",
    height: "auto",
    width: "auto",
    borderRadius: 8,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  menuButtonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "100%",
  },
  menuLinkText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  signOutPressed: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 8,
  },
  btnPressed: {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    borderRadius: 8,
  },
});

export default Header;
