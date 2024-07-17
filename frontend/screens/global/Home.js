import { Pressable, StyleSheet, View } from "react-native";
import { useState } from "react";
import Header from "../../components/home/Header";
import ChatMenu from "../../components/home/ChatMenu";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ setIsAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.pressContainer}
        onPress={() => setShowMenu(false)}>
        <View style={styles.innerContainer}>
          <Header
            setShowMenu={setShowMenu}
            showMenu={showMenu}
            setIsAuthenticated={setIsAuthenticated}
          />
          <ChatMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
  },
  innerContainer: {
    width: "95%",
  },
  pressContainer: {
    flex: 1,
  },
});

export default Home;
