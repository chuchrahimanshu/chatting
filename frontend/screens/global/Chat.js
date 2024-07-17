import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/chat/Header";

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.pressContainer}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.chatContainer}></View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
  },
  pressContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 8,
    height: "12%",
  },
  chatContainer: {
    paddingHorizontal: 8,
    height: "88%",
    backgroundColor: "#c9c9c9",
  },
});

export default Chat;
