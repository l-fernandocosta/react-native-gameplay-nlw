import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../Screens/SignIn";
import { Home } from "../Screens/Home";
import { AppointmentDetails } from "../Screens/AppointmentDetails";
import { AppointmentCreate } from "../Screens/AppointmentCreate";
import { useAuth } from "../hooks/Auth";
import { GuildProps } from "../Components/Guilds";
import { AppointmentProps } from "../Components/Appointments";

export type RootStackParams = {
  SignIn: undefined;
  Home: undefined;
  AppointmentDetails: {
    guildSelected: AppointmentProps;
  };
  AppointmentCreate: undefined;
};

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  const { user } = useAuth();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!user?.id ? (
        <Screen name="SignIn" component={SignIn} />
      ) : (
        <>
          <Screen name="Home" component={Home} />
          <Screen name="AppointmentDetails" component={AppointmentDetails} />
          <Screen name="AppointmentCreate" component={AppointmentCreate} />
        </>
      )}
    </Navigator>
  );
};
