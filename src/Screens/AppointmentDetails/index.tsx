import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import BannerImg from "../../assets/banner.png";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

import { ListHeader } from "../../Components/LIstHeader";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { Header } from "../../Components/Header";
import { theme } from "../../global/styles/themes";
import { Members } from "../../Components/Members";
import { ListDivider } from "../../Components/ListDivider";
import { Background } from "../../Components/Background";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      name: "Fernando",
      avatar: "http://github.com/l-fernandocosta.png",
      status: "online",
    },
    {
      id: "2",
      name: "Rogério",
      avatar: "http://github.com/l-fernandocosta.png",
      status: "busy",
    },
  ];
  return (
    <Background style={styles.container}>
      <Header
        title="Detalhes"
        action={
          <Ionicons name="share-sharp" size={24} color={theme.colors.primary} />
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitletitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="total: 3" />
      <FlatList
        data={members}
        ItemSeparatorComponent={() => <ListDivider />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Members
            avatar={item.avatar}
            status={item.status}
            name={item.name}
            id={item.id}
          />
        )}
      />
      <View style={styles.footer}>
        <ButtonIcon name="Entrar no servidor do Discord" />
      </View>
      
    </Background>
  );
}
