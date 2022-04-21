import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { GuildProps, Guilds } from "../../Components/Guilds";
import { ListDivider } from "../../Components/ListDivider";
import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export function Guild({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: "1",
      name: "lendários",
      icon: undefined,
      owner: true,
    },
    {
      id: "2",
      name: "lendários",
      icon: undefined,
      owner: true,
    },
    {
      id: "31",
      name: "lendários",
      icon: undefined,
      owner: true,
    },
    {
      id: "14",
      name: "lendários",
      icon: undefined,
      owner: true,
    },
    {
      id: "112",
      name: "lendários",
      icon: undefined,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 69 }}
        style={styles.guilds}
        data={guilds}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guilds data={item} onPress={() => handleGuildSelected(item)} />
        )}
      />
    </View>
  );
}
