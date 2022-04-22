import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";

import { theme } from "../../global/styles/themes";
import { styles } from "./styles";
import DiscordSvg from "../../assets/discord.svg";
const { CDN_IMAGE } = process.env;

type Props = {
  guildIcon: string | undefined;
  guildId: string;
};

export function GuildIcon({ guildIcon, guildId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${guildIcon}.png`;
  const { secondary70, secondary50 } = theme.colors;
  return (
    <View
      style={styles.container}
    >
      {guildIcon ? (
        <Image source={{ uri }} style={styles.image} resizeMode={"cover"} />
      ) : (
        <DiscordSvg width={40} height={40} style={styles.discordImg}/>
      )}
    </View>
  );
}
