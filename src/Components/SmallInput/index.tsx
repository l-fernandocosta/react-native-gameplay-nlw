import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";

type Props = TextInputProps & {
  text: string;
};

export function SmallInput({ text, ...rest }: Props) {
  const { secondary40, secondary85} = theme.colors;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearEffect}
        colors={[secondary40, secondary85]}
      >
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder={text}
          {...rest}
        />
      </LinearGradient>
    </View>
  );
}
