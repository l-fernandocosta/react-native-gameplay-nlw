import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/themes";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import React, { ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary40, secondary80, heading } = theme.colors;
  return (
    <LinearGradient
      colors={[secondary40, secondary80]}
      style={styles.container}
    >
      <BorderlessButton>
        <Ionicons name="chevron-back-outline" size={24} color={heading} style={{marginLeft: 10}}/>
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      <View>
        
      </View>
    </LinearGradient>
  );
}
