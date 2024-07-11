import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const SendingOTP = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Sending OTP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    position: "absolute",
    height: "100%",
    width: "100%",
    backfaceVisibility: "visible",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#4f4f4f",
    opacity: 0.6,
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "white",
    height: 130,
    width: 180,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 15,
    color: "black",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default SendingOTP;
