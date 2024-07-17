import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "../../components/home/Header";
import ChatMenu from "../../components/home/ChatMenu";

const Home = ({ setIsAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.pressContainer}
        onPress={() => setShowMenu(false)}>
        <Header
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          setIsAuthenticated={setIsAuthenticated}
        />
        <ChatMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    alignItems: "center",
    flex: 1,
    width: "95%",
    alignSelf: "center",
  },
  pressContainer: {
    flex: 1,
  },
});

export default Home;
