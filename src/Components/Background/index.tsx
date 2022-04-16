import { DefaultTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";

type BackgroundProps = ViewProps & {
  children: ReactNode, 
};

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};


export function Background( {children} : BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
