import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { Background } from "../../Components/Background";
import { Header } from "../../Components/Header";
import { CategorySelector } from "../../Components/CategorySelect";
import { theme } from "../../global/styles/themes";
import { LinearGradient } from "expo-linear-gradient";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const { secondary30, secondary70, heading } = theme.colors;
  return (
    <Background style={styles.container}>
      <Header title="Agendamento" />

      <Text style={styles.label}>Categoria</Text>
      <CategorySelector categorySelected={category} setCategory={setCategory} />

      <RectButton style={styles.button}>
        <View style={styles.serverButton}>
          <LinearGradient
            colors={[secondary30, secondary70]}
            style={styles.imageContainer}
          >
            <Image
              style={styles.imageServer}
              source={{
                uri: "https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop16x9.1023w.jpgs",
              }}
            />
          </LinearGradient>
          <Text style={styles.serverText}>Selecione um servidor</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={heading}
            style={{ marginRight: 5 }}
          />
        </View>
      </RectButton>
    </Background>
  );
}
