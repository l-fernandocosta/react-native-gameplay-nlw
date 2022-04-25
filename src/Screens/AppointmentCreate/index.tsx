import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import uuid from "react-native-uuid";
import { COLLECTION_NEWAPPOINTMENTS } from "../../configs/database";
import { RootStackParams } from "../../routes/auth.routes";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";

import Toast from "react-native-root-toast";
import { AppointmentProps } from "../../Components/Appointments";
import { Background } from "../../Components/Background";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { CategorySelector } from "../../Components/CategorySelect";
import { GuildIcon } from "../../Components/GuildIcon";
import { GuildProps } from "../../Components/Guilds";
import { Header } from "../../Components/Header";
import { ListHeader } from "../../Components/LIstHeader";
import { ModalView } from "../../Components/ModalView";
import { SmallInput } from "../../Components/SmallInput";
import { TextArea } from "../../Components/TextArea";
import { Guild } from "../Guild";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const { secondary30, secondary70, heading } = theme.colors;
  const [openModal, setOpenModal] = useState(false);
  const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

  const [dayAndMonth, setdayAndMonth] = useState("");
  const [hourAndMinute, setHourAndMinute] = useState("");
  const [description, setDescription] = useState("");
  const [guildSelected, setGuildSelected] = useState<GuildProps>(
    {} as GuildProps
  );

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  const handleGuildSelected = (guildSelected: GuildProps) => {
    setGuildSelected(guildSelected);
    setOpenModal(!openModal);
  };

  const handleSave = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild: {
        id: guildSelected.id,
        name: guildSelected.name,
        icon: guildSelected.icon,
        owner: guildSelected.owner,
      },
      category: category,
      date: `${dayAndMonth} às ${hourAndMinute}`,
      description: description,
    };
    const storage = await AsyncStorage.getItem(COLLECTION_NEWAPPOINTMENTS);
    const appointments: AppointmentProps[] = storage ? JSON.parse(storage) : [];
    if (
      category !== "" &&
      dayAndMonth !== "" &&
      hourAndMinute !== "" &&
      guildSelected.id !== "undefined" &&
      description !== ""
    ) {
      await AsyncStorage.setItem(
        COLLECTION_NEWAPPOINTMENTS,
        JSON.stringify([...appointments, newAppointment])
      );
      navigate("Home");
      Toast.show(" Sua partida foi marcada 🎮", {
        backgroundColor: theme.colors.on,
        hideOnPress: true,
        keyboardAvoiding: true,
        opacity: 1,
        textStyle: {
          fontSize: 20,
          fontFamily: theme.fonts.title700,
        },
        position: Toast.positions.CENTER,
      });
    } else {
      Toast.show("Preencha todos os campos  😩", {
        backgroundColor: theme.colors.primary,
        hideOnPress: true,
        keyboardAvoiding: true,
        opacity: 1,
        textStyle: {
          fontSize: 20,
          fontFamily: theme.fonts.title700,
        },
        position: Toast.positions.CENTER,
      });
    }
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
                <GuildIcon
                  guildIcon={guildSelected.icon}
                  guildId={guildSelected.id}
                />
              </LinearGradient>
              <Text style={styles.serverText}>
                {guildSelected.name
                  ? guildSelected.name
                  : "Selecione o servidor"}
              </Text>
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
              <SmallInput
                text={"dd/mm"}
                maxLength={5}
                onChangeText={setdayAndMonth}
              />
            </View>

            <View style={styles.flexTime}>
              <Text style={styles.textTime}>Horário</Text>
              <SmallInput
                text={"hh:mm"}
                maxLength={5}
                onChangeText={setHourAndMinute}
              />
            </View>
          </View>

          <View style={styles.describeTextArea}>
            <ListHeader title="Descrição" subtitle="MAX. 100 CARACTERES" />
            <TextArea onChangeText={setDescription} maxLength={100} />
          </View>
          <View style={styles.buttonAppointment}>
            <ButtonIcon name="AGENDAR" onPress={handleSave} />
          </View>
          <ModalView
            closeModal={handleCloseModal}
            visible={openModal}
            statusBarTranslucent={true}
            onRequestClose={() => {
              setOpenModal(!openModal);
            }}
          >
            <Guild handleGuildSelected={handleGuildSelected} />
          </ModalView>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}
