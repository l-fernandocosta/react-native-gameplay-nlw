import React, { useEffect, useState } from "react";
import {
  Alert,
  ImageBackground,
  Linking,
  Platform,
  Share,
  Text,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";

import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../Components/Appointments";
import { Background } from "../../Components/Background";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { Header } from "../../Components/Header";
import { ListDivider } from "../../Components/ListDivider";
import { ListHeader } from "../../Components/LIstHeader";
import { Load } from "../../Components/Load";
import { Members } from "../../Components/Members";
import { theme } from "../../global/styles/themes";
import { useAuth } from "../../hooks/Auth";
import { api } from "../../services/api";

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};
type Props = {
  guildSelected: AppointmentProps;
};
type WidgetProps = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
};

const members = [
  {
    id: "1",
    avatar_url: "string",
    status: "idle",
    username: "lukinha",
  },
];
export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Props;
  const [widget, setWidget] = useState<WidgetProps>({} as WidgetProps);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  async function fetchGuildMembers() {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      console.log(response);
      setWidget(response.data);
    } catch (error) {
      Alert.alert(`${error}`, `Ative o Widget no servidor ! `);
    } finally {
      setIsLoading(false);
    }
  }
  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }
  function handleInvite() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }
  useEffect(() => {
    fetchGuildMembers();
  });

  return (
    <Background style={styles.container}>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild?.owner && (
            <Ionicons
              name="share-sharp"
              size={24}
              color={theme.colors.primary}
              onPress={handleInvite}
            />
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected?.guild.name}</Text>
          <Text style={styles.subtitletitle}>{guildSelected?.description}</Text>
        </View>
      </ImageBackground>
      {<ListHeader title="Jogadores" subtitle={`${widget.members?.length}`} />}
      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={widget?.members}
          ItemSeparatorComponent={() => <ListDivider />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Members
              avatar={item.avatar_url}
              status={item.status}
              name={item.username}
              id={item.id}
            />
          )}
        />
      )}
      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon
            name="Entrar no servidor do Discord"
            hasIcon={true}
            onPress={handleOpenGuild}
          />
        </View>
      )}
    </Background>
  );
}
