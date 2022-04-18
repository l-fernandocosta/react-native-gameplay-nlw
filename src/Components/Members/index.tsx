import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../Avatar";
import { ButtonIcon } from "../ButtonIcon";
import { styles } from "./styles";

type Props = {
  id?: string;
  status: string;
  name: string;
  avatar: string;
};

export function Members({ id, status, name, avatar }: Props) {
  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar} />
      <View style={styles.profileContent}>
        <Text style={styles.player}>{name}</Text>

        <View style={styles.statusContent}>
         
          {status === "online" && <View style={styles.on} />}
          {status === "Offline" && <View style={styles.off} />}
          {status === "busy" && <View style={styles.busy} />}
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
     
    </View>
  );
}
