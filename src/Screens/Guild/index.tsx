import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { GuildProps, Guilds } from "../../Components/Guilds";
import { ListDivider } from "../../Components/ListDivider";
import { Load } from "../../Components/Load";
import { useAuth } from "../../hooks/Auth";
import { api } from "../../services/api";
import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export function Guild({ handleGuildSelected }: Props) {
  const [guilds, setGuild] = useState<GuildProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  async function loadGuilds() {
    const response = await api.get(`/users/@me/guilds`, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    setGuild(response.data);
    setIsLoading(!isLoading)
  }

  useEffect(() => {
    loadGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Load />
      ) : (
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
      )}
    </View>
  );
}
