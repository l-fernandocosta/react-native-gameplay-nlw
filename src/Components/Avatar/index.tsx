import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";

interface PropsAvatar {
  urlImage: string;
}

export function Avatar({ urlImage }: PropsAvatar) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.image} />
    </LinearGradient>
  );
}
