import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../../components/chat/Header";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.pressContainer}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.chatContainer}></View>
        <View style={styles.chatWriting}>
          <View style={styles.chatWritingBox}>
            <View style={styles.chatWritingLeft}>
              <Entypo name="emoji-happy" size={25} color="#6e6e6e" />
              <TextInput
                placeholder="Start typing ..."
                style={styles.chatInput}
                keyboardAppearance="dark"
              />
            </View>
            <Ionicons name="send" size={25} color="#6e6e6e" />
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
    position: "relative",
    backgroundColor: "white",
  },
  pressContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 8,
    height: 60,
    backgroundColor: "white",
  },
  chatContainer: {
    paddingHorizontal: 8,
    height: "100%",
    backgroundColor: "#c9c9c9",
  },
  chatWriting: {
    width: "98%",
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
  },
  chatWritingBox: {
    marginHorizontal: 8,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 6,
    borderRadius: 300,
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatWritingLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chatInput: {
    marginHorizontal: 10,
    width: "80%",
    fontSize: 16,
    marginBottom: 4,
  },
  avoidingView: {
    width: "100%",
  },
});

export default Chat;
