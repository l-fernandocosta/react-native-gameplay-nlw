import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";

import { theme } from "../../global/styles/themes";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://cdnb.artstation.com/p/assets/images/images/021/422/255/large/t-j-geisen-lol-icon-rendered-v001.jpg?1571640551";
  const { secondary70, secondary50 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri }} style={styles.image} resizeMode={"cover"} />
    </LinearGradient>
  );
}
