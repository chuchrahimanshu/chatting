import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from './navigations/AuthNavigation';

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </>
  );
}