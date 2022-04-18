import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";
import React, { ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../routes/auth.routes";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary40, secondary80, heading, primary } = theme.colors;
  const { pop } = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <LinearGradient
      colors={[secondary40, secondary80]}
      style={styles.container}
    >
      <BorderlessButton>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={heading}
          style={{ marginLeft: 10 }}
          onPress={() => {
            pop();
          }}
        />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {action && (
        <BorderlessButton>
          {action}
        </BorderlessButton>
      )}
    </LinearGradient>
  );
}
