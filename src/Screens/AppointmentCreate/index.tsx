import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global/styles/themes";
import { LinearGradient } from "expo-linear-gradient";
import discordImg from "../../assets/discord.png"


import { CategorySelector } from "../../Components/CategorySelect";
import { Background } from "../../Components/Background";
import { Header } from "../../Components/Header";
import { SmallInput } from "../../Components/SmallInput";
import { ListHeader } from "../../Components/LIstHeader";
import { TextArea } from "../../Components/TextArea";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { ModalView } from "../../Components/ModalView";
import { GuildProps } from "../../Components/Guilds";
import { GuildIcon } from "../../Components/GuildIcon";
import { Guild } from "../Guild";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const { secondary30, secondary70, heading } = theme.colors;
  const [openModal, setOpenModal] = useState(false);
  const [guildSelected, setGuildSelected] = useState<GuildProps>(
    {} as GuildProps 
  );

  const handleOpenModal = () => {
   setOpenModal(true); 
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal)
  }
  const handleGuildSelected = (guildSelected: GuildProps) => {
    setGuildSelected(guildSelected);
    setOpenModal(!openModal)
    
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background style={styles.container}>
        <ScrollView stickyHeaderIndices={[0]}>
          <Header title="Agendamento" />

          <Text style={styles.label}>Categoria</Text>
          <CategorySelector
            categorySelected={category}
            setCategory={setCategory}
          />

          <RectButton
            style={styles.buttonSelectServer}
            onPress={handleOpenModal}
          >
            <View style={styles.serverButton}>
              <LinearGradient
                colors={[secondary30, secondary70]}
                style={styles.imageContainer}
              >
                {guildSelected.icon ? <GuildIcon/> :  (
                      <Image
                      style={styles.imageServer}
                      source={discordImg}
                      resizeMode="center"
                    />
                )}
            
              </LinearGradient>
              <Text style={styles.serverText}>{guildSelected.name ?  guildSelected.name : ("Selecione o servidor")}</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={heading}
                style={{ marginRight: 5 }}
              />
            </View>
          </RectButton>
          <View style={styles.flexAppointment}>
            <View style={styles.flexDate}>
              <Text style={styles.textDate}>Dia e mês</Text>
              <SmallInput text={"dd/mm"} />
            </View>
            <View style={styles.flexTime}>
              <Text style={styles.textTime}>Horário</Text>
              <SmallInput text={"hh:mm"} />
            </View>
          </View>

          <View style={styles.describeTextArea}>
            <ListHeader title="Descrição" subtitle="MAX. 100 CARACTERES" />
            <TextArea  />
          </View>
          <View style={styles.buttonAppointment}>
            <ButtonIcon name="AGENDAR" />
          </View>
          <ModalView closeModal={handleCloseModal} visible={openModal} statusBarTranslucent={true} onRequestClose={() => {
            setOpenModal(!openModal)
          }}>
            <Guild handleGuildSelected={handleGuildSelected} />
          </ModalView>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}
