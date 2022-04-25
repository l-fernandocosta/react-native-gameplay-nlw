import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { theme } from "../../global/styles/themes";
import { GuildProps } from "../Guilds";


export type AppointmentProps = {
  id: string;
  guild: GuildProps ;
  category: string;
  description: string;
  date: string;
  
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointments({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  
  
  
  console.log(`THIS IS MY DATA`, data)

  const { primary, on } = theme.colors;
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon guildIcon={data.guild.icon} guildId={data.guild.id}/>
        <View style={styles.content}>

          <View style={styles.header}>
            <Text style={styles.guildName}>{data.guild?.name}</Text>
    
            <Text style={styles.category}>{category?.title}</Text>
          </View>

       
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg fill={primary} />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={data.guild?.owner ? on : primary} />
              <Text style={styles.player}>{data.guild?.owner ? 'Host' : "Visitor"}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
