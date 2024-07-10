import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigations/AuthNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
SplashScreen.preventAutoHideAsync();
axios.defaults.withCredentials = true;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // TODO: Add Logic for fetching accessToken from async storage
        // TODO: Make an API call to check weather user is authenticated or not
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
          <AuthNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}
