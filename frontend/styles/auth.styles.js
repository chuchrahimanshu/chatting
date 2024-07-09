import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f1f1f1",
  },
  formContainer: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 30,
    paddingTop: 30,
    borderRadius: 20,
    width: "100%",
  },
  label: {
    fontSize: 17,
  },
  required: {
    color: "red",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSubContainer: {
    width: "48%",
  },
  link: {
    color: "blue",
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonText: {
    backgroundColor: "black",
    alignSelf: "center",
    paddingTop: 8,
    paddingBottom: 11,
    paddingHorizontal: 12,
    borderRadius: 6,
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  pressButton: {
    opacity: 0.85,
  },
  socialContainer: {
    marginTop: 10,
  },
  google: {
    fontWeight: "600",
    fontSize: 20,
  },
  flexBetween: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  otpContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
});
