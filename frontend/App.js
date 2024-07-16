import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigations/AuthNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalNavigation from "./navigations/GlobalNavigation";
SplashScreen.preventAutoHideAsync();
axios.defaults.withCredentials = true;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('token');
        if (accessToken) {
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          {isAuthenticated ? <GlobalNavigation setIsAuthenticated={setIsAuthenticated} /> : <AuthNavigation setIsAuthenticated={setIsAuthenticated} />}
        </NavigationContainer>
      </Provider>
    </>
  );
}
