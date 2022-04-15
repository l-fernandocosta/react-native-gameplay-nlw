import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { SignIn } from "./src/Screens/SignIn";
import { StatusBar, View } from "react-native";
import React from "react";
import { Background } from "./src/Components/Backgroud";

export default function App() {
  const [isLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });
  if(!isLoaded) {
    return <AppLoading/>
  }
  return (
    <Background>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      <SignIn />
    </Background>
  );
}
