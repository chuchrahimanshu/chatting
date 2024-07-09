import { Text, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import Icon from "react-native-vector-icons/Ionicons";

const AuthHeader = ({ title, onPress, showIcon = true }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{title}</Text>
      {showIcon && (
        <Icon
          name="arrow-back-circle-outline"
          size={33}
          style={styles.headerIcon}
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default AuthHeader;
