import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigations/AuthNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}
