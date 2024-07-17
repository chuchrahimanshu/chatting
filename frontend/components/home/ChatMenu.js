import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import User from "../../assets/user.jpg";
import { useNavigation } from "@react-navigation/native";

const ChatMenu = () => {
  const navigation = useNavigation();

  const handleChatPressed = () => {
    navigation.navigate("Chat");
  };

  return (
    <ScrollView>
      <Pressable
        style={({ pressed }) => [pressed ? styles.chatBoxPressed : null]}
        onPress={handleChatPressed}>
        <View style={styles.chatBox}>
          <View style={styles.chatImageContainer}>
            <Image style={styles.chatImage} source={User} />
          </View>
          <View style={styles.chatTextContainer}>
            <Text
              style={styles.chatUsername}
              numberOfLines={1}
              ellipsizeMode="tail">
              Himanshu Chuchra
            </Text>
            <Text
              style={styles.chatLastMessage}
              numberOfLines={1}
              ellipsizeMode="tail">
              This is the last text message shown.
            </Text>
          </View>
          <View style={styles.chatTimeContainer}>
            <Text style={styles.chatTime}>01:25 PM</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [pressed ? styles.chatBoxPressed : null]}
        onPress={handleChatPressed}>
        <View style={styles.chatBox}>
          <View style={styles.chatImageContainer}>
            <Image style={styles.chatImage} source={User} />
          </View>
          <View style={styles.chatTextContainer}>
            <Text
              style={styles.chatUsername}
              numberOfLines={1}
              ellipsizeMode="tail">
              Himanshu Chuchra
            </Text>
            <Text
              style={styles.chatLastMessage}
              numberOfLines={1}
              ellipsizeMode="tail">
              This is the last text message shown.
            </Text>
          </View>
          <View style={styles.chatTimeContainer}>
            <Text style={styles.chatTime}>01:25 PM</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    borderRadius: 15,
    flexDirection: "row",
    height: 75,
    width: "100%",
    paddingTop: 12,
    paddingBottom: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    zIndex: 1,
  },
  chatBoxPressed: {
    backgroundColor: "#cbcbcb",
    borderRadius: 10,
  },
  chatImageContainer: {
    width: "17%",
    justifyContent: "center",
    alignItems: "center",
  },
  chatImage: {
    height: 55,
    width: 55,
    borderRadius: 150,
  },
  chatTextContainer: {
    width: "63%",
    paddingTop: 6,
    alignItems: "flex-start",
    paddingHorizontal: 10,
    gap: 3,
  },
  chatUsername: {
    fontSize: 18,
    fontWeight: "600",
  },
  chatLastMessage: {
    fontSize: 14,
  },
  chatTimeContainer: {
    width: "20%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  chatTime: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 12,
  },
});

export default ChatMenu;
