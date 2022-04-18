import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../routes/auth.routes";

export function ButtonAdd({ ...rest }: RectButtonProps) {

  return (
    <RectButton style={styles.container} {...rest}>
      <AntDesign name="plus" size={24} color="white" />
    </RectButton>
  );
}
