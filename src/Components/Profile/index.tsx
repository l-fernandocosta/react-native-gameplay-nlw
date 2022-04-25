import React from "react";
import { Alert, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";
import { phrasesArray } from "../../utils/phrasesArray";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert("LogOut", "Deseja sair do GamePlay ? ", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          signOut();
        },
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.username}</Text>
        </View>
        <Text style={styles.message}>
          {phrasesArray[Math.floor(Math.random())]}
        </Text>
      </View>
    </View>
  );
}
