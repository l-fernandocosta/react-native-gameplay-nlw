import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { theme } from "../../global/styles/themes";

type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

type DataProps = {
  id: string;
  guild: GuildProps;
  category: string;
  description: string;
  date: string;
};

type Props = RectButtonProps & {
  data: DataProps;
};

export function Appointments({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>

          <View style={styles.header}>
            <Text style={styles.guildName}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <Text style={styles.gameName}>Read Dead Redemption 2</Text>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg fill={primary} />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={styles.player}>{owner ? "Host" : "Visitor"}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
