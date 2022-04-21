import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/Auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

const phrasesArray = ["Hoje é dia de maldade ⚡", "Platina ou nada 🚀", "Main Lux Suporte ? 🤔"]
export function Profile() {
  const {user} = useAuth();
  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.username}</Text>
        </View>
        <Text style={styles.message}>{phrasesArray[Math.floor(Math.random())]}</Text>
      </View>
    
    </View>
  );
}
