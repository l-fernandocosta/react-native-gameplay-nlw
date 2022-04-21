import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";
import { Background, MyTheme } from "./src/Components/Background/index";

import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./src/routes/auth.routes";
import { AuthProvider, useAuth } from "./src/hooks/Auth";
import { SignIn } from "./src/Screens/SignIn";

export default function App() {
  const { user } = useAuth();
  const [isLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <Background>
      <AuthProvider>
        <NavigationContainer theme={MyTheme}>
          <StatusBar
            translucent
            barStyle={"light-content"}
            backgroundColor={"transparent"}
          />
          <AuthRoutes />
        </NavigationContainer>
      </AuthProvider>
    </Background>
  );
}
