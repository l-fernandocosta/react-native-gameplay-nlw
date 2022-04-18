import React, { ReactFragment } from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { SignIn } from "../Screens/SignIn";
import { Home } from "../Screens/Home";
import { AppointmentDetails } from "../Components/AppointmentDetails";


export type RootStackParams = {
  SignIn: undefined,
  Home: undefined, 
  AppointmentDetails: undefined, 
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
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Navigator>
  );
};
