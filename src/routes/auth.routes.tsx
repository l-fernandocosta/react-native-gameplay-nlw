import React, { ReactFragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../Screens/SignIn";
import { Home } from "../Screens/Home";


export type RootStackParams ={
  SignIn: undefined,
  Home: undefined, 
}


const { Navigator, Screen } = createStackNavigator();
export const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
