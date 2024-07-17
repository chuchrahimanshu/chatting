import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";
import User from "../../assets/user.jpg";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerLeftSection}>
        <Pressable onPress={handleBackButton}>
          <Icons
            name="arrow-back-outline"
            size={30}
            color="black"
            style={styles.backIcon}
          />
        </Pressable>
        <Image source={User} style={styles.user} />
        <View style={styles.userTextContainer}>
          <Text style={styles.username}>Himanshu Chuchra</Text>
          <Text style={styles.usernoti}>Typing...</Text>
        </View>
      </View>
      <View>
        <Pressable>
          <Icons name="ellipsis-vertical" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 5,
  },
  headerLeftSection: {
    flexDirection: "row",
    gap: 5,
  },
  backIcon: {
    marginTop: 5,
  },
  user: {
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: 100,
    marginRight: 6,
  },
  username: {
    fontSize: 17,
    fontWeight: "500",
  },
  usernoti: {
    fontSize: 12,
  },
});

export default Header;
