import React from "react";
import { View, 
  TouchableOpacity, 
  TouchableOpacityProps, 
  Image, 
  Text } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";


export type GuildProps = {
  id: string , 
  name: string ,  
  icon: string | undefined,  
  owner: boolean, 
}

type Props = TouchableOpacityProps & {
  data: GuildProps; 
 
}


export function Guilds({data, ...rest} : Props){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.image}>
      {<GuildIcon guildIcon={data.icon} guildId={data.id}/>}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.guildName}>{data.name}</Text>
        <Text style={styles.guildOwner}>{data.owner ? "Host" :  "Visitor"}</Text>
      </View>
      <MaterialIcons name="navigate-next" size={24} color= {theme.colors.heading} />
    </TouchableOpacity>
  )
}