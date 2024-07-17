import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../../components/chat/Header";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "../../assets/user.jpg";

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.pressContainer}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.chatContainer}>
          <View style={styles.chatLeftContainer}>
            <View style={styles.cornerEffect}>
              <View style={styles.diagonalCutLeft} />
            </View>
            <View style={styles.chatBoxLeft}>
              {/* <View style={styles.chatTopBoxContainer}>
              <Image source={User} style={styles.userImage} />
              <View style={styles.chatTopBox}>
                <Text style={styles.chatBoxUsername}>Himanshu Chuchra</Text>
                <Text style={styles.chatBoxTime}>9:24 PM</Text>
              </View>
            </View> */}
              <Text style={styles.chatBoxText}>
                a book or other written or printed work, regarded in terms of
                its content rather than its physical form.
              </Text>
              <Text style={styles.chatBoxTime}>9:24 AM</Text>
            </View>
          </View>
          <View style={styles.chatRightContainer}>
            <View style={styles.chatBoxRight}>
              {/* <View style={styles.chatTopBoxContainer}>
              <Image source={User} style={styles.userImage} />
              <View style={styles.chatTopBox}>
                <Text style={styles.chatBoxUsername}>Himanshu Chuchra</Text>
                <Text style={styles.chatBoxTime}>9:24 PM</Text>
              </View>
            </View> */}
              <Text style={styles.chatBoxText}>
                a book or other written or printed work, regarded in terms of
                its content rather than its physical form.
              </Text>
              <Text style={styles.chatBoxTime}>9:24 AM</Text>
            </View>
            <View style={styles.cornerEffect}>
              <View style={styles.diagonalCutRight} />
            </View>
          </View>
        </View>
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
    paddingVertical: 20,
    height: "100%",
    backgroundColor: "#c9c9c9",
    gap: 12,
  },
  chatLeftContainer: {
    flexDirection: "row",
  },
  chatRightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    zIndex: 10,
    marginRight: 10,
  },
  chatBoxLeft: {
    backgroundColor: "white",
    width: "auto",
    maxWidth: 280,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  chatBoxRight: {
    backgroundColor: "white",
    width: "auto",
    maxWidth: 280,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  chatTopBoxContainer: {
    flexDirection: "row",
  },
  chatBoxUsername: {
    fontSize: 16,
    fontWeight: "500",
  },
  chatBoxTime: {
    fontSize: 12,
    textAlign: "right",
  },
  chatBoxText: {
    fontSize: 16,
    lineHeight: 21,
  },
  cornerEffect: {
    width: 18,
    height: 19,
    overflow: "hidden",
  },
  diagonalCutLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "200%",
    height: "200%",
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
    top: -32,
  },
  diagonalCutRight: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderBottomWidth: 15,
    borderLeftColor: "white",
    borderBottomColor: "transparent",
  },
});

export default Chat;
